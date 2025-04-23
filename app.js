function changePage(page) {
  if (page == 0) {
    window.location.replace("../index.html");
  } else {
    window.location.replace(`plantas/p${page}.html `);
  }
}
