import React from "react";

import {
  Field,
  shorthands,
  makeStyles,
  Button,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    maxWidth: "200px",
  },
});

export function FarmLogoUpload(props) {
  const styles = useStyles();
  return (
    <form
      action="/"
      method="post"
      enctype="multipart/form-data"
      className={styles.root}
    >
      <Field label="Upload farm logo" {...props}>
        <input
          type="file"
          name="profile-photo"
          accept=".jpg, .jpeg, .png"
          multiple
        />
      </Field>
      <Button type="submit" appearance="primary" {...props}>
        Upload logo
      </Button>
    </form>
  );
}
