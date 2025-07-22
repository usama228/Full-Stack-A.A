"use client";

export default function ClearButton(props) {
  const { clearFilters, show } = props;
  const clearHandler = () => {
    clearFilters()
  };

  return (
    <>
      {show ? (
        <button
          onClick={clearHandler}
          className="ud-btn btn-thm ui-clear-btn w-100"
        >
          Clear
          <i className="fal fa-arrow-right-long"></i>
        </button>
      ) : (
        ""
      )}
    </>
  );
}
