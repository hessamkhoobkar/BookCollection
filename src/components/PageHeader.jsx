import React from "react";
import "./pageheader.css";

const PageHeader = ({
  pageTitle,
  pageSubtitle,
  pageSubtitleAmount,
  pageAction,
}) => {
  return (
    <section className="page-header">
      <div className="page-details">
        <h1 className="page-title"> {pageTitle} </h1>
        <p className="page-subtitle">
          <span className="subtitle-amount"> {pageSubtitleAmount} </span>
          {pageSubtitle}
        </p>
      </div>
      {pageAction ? (
        <div className="page-actions">
          <button className="button is-primary">{pageAction}</button>
        </div>
      ) : (
        <div className="page-actions"></div>
      )}
    </section>
  );
};

export default PageHeader;
