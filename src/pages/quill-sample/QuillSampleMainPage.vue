<template>
  <h3>Quill: Rich Text Editor</h3>
  <div style="width: 800px; height: 300px">
    <div id="editor" ref="quillEditorRef" />
    <p>quillContents(Delta): {{ quillContents }}</p>
    <p>quillLenght: {{ quillLength }}</p>
    <p>quillText: {{ quillText }}</p>
    <p>html(SemanticHTML): {{ html }}</p>
  </div>
</template>

<script setup lang="ts">
import Quill from 'quill';
import type { Delta } from 'quill/core';
import { onMounted, ref } from 'vue';

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

onMounted(() => {
  quill = new Quill('#editor', {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: '내용을 입력하세요.',
    theme: 'snow',
  });

  quill.on('text-change', (delta, oldData, source) => {
    console.log(`'text-change' call by ${source}, delta: ${delta}, oldData: ${oldData}`);
    quillContents.value = quill.getContents();
    quillLength.value = quill.getLength();
    quillText.value = quill.getText();
    html.value = quill.getSemanticHTML();
  });

  quill.on('selection-change', (range, oldRange, source) => {
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
  });
  quill.on('editor-change', (eventName, ...args) => {
    console.log(`editor-change: ${eventName}, args: ${args}`);
  });

  quill.once('text-change', () => {
    console.log('The first text change!');
  });

  quill.off('text-change', () => {
    console.log('remove "text-change" event!');
  });
});
</script>
