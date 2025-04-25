export class UrlHelper {
  static getMemberId(): number | null {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id, 10) : null;
  }
}
