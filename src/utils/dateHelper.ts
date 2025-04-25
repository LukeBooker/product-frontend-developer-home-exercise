export class DateHelper {
  static isEarlier(date: string | null): boolean {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedCurrentDate = `${year}-${month}-${day}T00:00:00`;

    if (!date) {
      return false;
    }

    return new Date(date) < new Date(formattedCurrentDate);
  }
}
