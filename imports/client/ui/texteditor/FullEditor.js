import CKEditor from "@ckeditor/ckeditor5-react";
import CustomEditor from "julix89";
import React from "react";

export default (FullEditor = props => {
  return (
    <div style={{ height: "100%", fontSize: "180%" }}>
      <CKEditor
        editor={CustomEditor}
        name={props.name}
        config={{
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
    </div>
  );
});
