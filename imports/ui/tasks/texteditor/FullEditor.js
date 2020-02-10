import CKEditor from "@ckeditor/ckeditor5-react";
import CustomEditor from "julix89";
import React from "react";

export default (FullEditor = props => {
  return (
    <CKEditor
      style={{ maxHeight: "200px", fontSize: "180%" }}
      editor={CustomEditor}
      name={props.name}
      config={{
        height: "80px",
        toolbar: {
          items: [
            "heading",
            "|",
            "highlight",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "insertTable",
            "blockQuote",
            "undo",
            "redo"
          ]
        }
      }}
      data={props["value"]}
      onChange={props["onChange"]}
    />
  );
});
