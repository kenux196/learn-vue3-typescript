<template>
  <h3>Quill: Rich Text Editor</h3>
  <!-- <QuillEditor theme="snow" /> -->
  <div style="width: 800px; height: 300px">
    <div id="editor" ref="quillEditor">
      <p>Core build with no theme, formatting, non-essential modules</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Quill from 'quill';
import { onMounted, ref } from 'vue';

const quillEditor = ref(null);

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
  const quill: Quill = new Quill('#editor', {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: '내용을 입력하세요.',
    theme: 'snow',
  });
});
</script>
