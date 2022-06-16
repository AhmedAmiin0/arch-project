const Errors = ({ formik }) => (
  <ul style={{ color: "#f44336" }}>
    {formik?.errors && formik?.touched
      ? Object.values(formik?.errors).map((err, i) => {
          return formik?.touched[Object.keys(formik?.errors)[i]] ? (
            <li key={i}>{err}</li>
          ) : null;
        })
      : ""}
  </ul>
);

export default Errors;
