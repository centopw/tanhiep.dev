'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const RichTextEditor = (contents) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: contents,
  })

  return <EditorContent editor={editor} />
}

export default RichTextEditor
