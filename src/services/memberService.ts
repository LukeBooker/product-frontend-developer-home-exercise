export class MemberService {
  static async fetchMemberData(id: number): Promise<any> {
    const url = `https://members-api.parliament.uk/api/Members/${id}`;

    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch member data (status: ${response.status})`
      );
    }

    return await response.json();
  }
}
