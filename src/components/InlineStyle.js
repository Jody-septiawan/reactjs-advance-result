//code here
const style = {
  textCenter: {
    textAlign: "center",
  },
  textBigBlue: {
    fontSize: "48px",
    color: "blue",
    fontWeight: "bold",
  },
  textMediumOrange: {
    fontSize: "24px",
    color: "orange",
    fontWeight: "bold",
  },
};

function InlineStyle() {
  return (
    <div style={style.textCenter}>
      <p style={{ color: "chocolate" }}>This is Chocolate</p>
      <p style={style.textBigBlue}>This is Blue</p>
      <p style={style.textMediumOrange}>This is Orange</p>
    </div>
  );
}

export default InlineStyle;
