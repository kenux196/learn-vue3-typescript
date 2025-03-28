<template>
  <h3 class="my-3">Quill: Rich Text Editor</h3>
  <div>
    <div id="editor" ref="quillEditorRef" style="width: 100%; height: 300px" />
  </div>
  <div class="my-5">
    <p>quillContents(Delta): {{ quillContents }}</p>
    <p>quillLenght: {{ quillLength }}</p>
    <p>quillText: {{ quillText }}</p>
    <p>html(SemanticHTML): {{ html }}</p>
  </div>
</template>

<script setup lang="ts">
import Quill from 'quill';
import type { Delta } from 'quill/core';
import { onMounted, onUnmounted, ref } from 'vue';

const quillEditorRef = ref(null);
const quillContents = ref<Delta>();
const quillLength = ref(0);
const quillText = ref('');
const html = ref('');

let quill: Quill;

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video'],

  [{ header: 1 }, { header: 2 }, { header: 3 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  // [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button
];

// Define event handlers as named functions to be able to properly remove them
const handleTextChange = function (delta: any, oldData: any, source: any) {
  console.log(`'text-change' call by ${source}, delta: ${delta}, oldData: ${oldData}`);
  quillContents.value = quill.getContents();
  quillLength.value = quill.getLength();
  quillText.value = quill.getText();
  html.value = quill.getSemanticHTML();
};

const handleSelectionChange = function (range: any, oldRange: any, source: any) {
  console.log('selection-change');
  if (range) {
    if (range.length == 0) {
      console.log('User cursor is on', range.index);
    } else {
      const text = quill.getText(range.index, range.length);
      console.log('User has highlighted', text);
    }
  } else {
    console.log('Cursor not in the editor');
  }
};

const handleEditorChange = function (eventName: string, ...args: any[]) {
  console.log(`editor-change: ${eventName}, args: ${args}`);
};

const handleFirstTextChange = function () {
  console.log('The first text change!');
};

onMounted(() => {
  quill = new Quill('#editor', {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: '내용을 입력하세요.',
    theme: 'snow',
  });

  quill.on('text-change', handleTextChange);
  quill.on('selection-change', handleSelectionChange);
  quill.on('editor-change', handleEditorChange);
  quill.once('text-change', handleFirstTextChange);
});

onUnmounted(() => {
  if (quill) {
    // Properly remove all event listeners when component unmounts
    quill.off('text-change', handleTextChange);
    quill.off('selection-change', handleSelectionChange);
    quill.off('editor-change', handleEditorChange);
  }
});
</script>
