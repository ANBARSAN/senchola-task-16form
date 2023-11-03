// Returning Corresponding NAVIGATION TITLE FIELDS

const RenderNavTitle = ({ navTitle, navIconTitle }) => {
  return (
    <>
      <div className="static-menu-bar">
        <div className="static-menu-title">{navIconTitle}</div>
        <div className="icon-wrapper">
          <div style={{ height: "5px" }}>____</div>
          <div style={{ height: "5px" }}>____</div>
          <div style={{ height: "5px" }}>____</div>
        </div>
      </div>
      <div className="multipage-sub-title">{navTitle}</div>
    </>
  );
};
export default RenderNavTitle;
