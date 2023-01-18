function openOrAlert(url) {
  return url
    ? () => window.open(`${url}`, "_blank")
    : () => window.alert("준비 중입니다.");
}

export default openOrAlert;
