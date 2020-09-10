// eslint-disable-next-line consistent-return
export function handleRequestAPIErrors(response) {
  // 通过正确的响应。
  if (response.ok) {
    return response;
  }

  // API 错误包含 {"error": "error message"} 但也有可能是未处理的 500 错误。
  try {
    response.json().then((data) => {
      throw new Error(data.error);
    });
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new Error(response.statusText);
    } else {
      throw e;
    }
  }
}
