import { MemberCard } from '../components/cards/memberCard/memberCard';
import { UrlHelper } from '../utils/urlHelper';
import { MemberService } from '../services/memberService';

export class MemberCardHandler {
  constructor(private card: MemberCard) {}

  async init(): Promise<void> {
    const memberId = UrlHelper.getMemberId();
    const errorMsg = 'Please enter a valid member id in the URL (e.g., /?id=4514)';

    if (!memberId) {
      alert(errorMsg);
      return;
    }

    try {
      const data = await MemberService.fetchMemberData(memberId);
      const member = {
        name: data.value.nameDisplayAs,
        img: data.value.thumbnailUrl,
        partyColour: data.value.latestParty.backgroundColour,
        constituancy: data.value.latestHouseMembership.membershipFrom,
        membershipEndDate: data.value.latestHouseMembership.membershipEndDate,
      };

      this.card.render(member);
    } catch (err) {
      console.error('Error fetching member data:', err);
      alert(`Error fetching member data. ${errorMsg}`);
    }
  }
}
