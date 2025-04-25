import { DateHelper } from "../../../utils/dateHelper";

export type Member = {
  name: string;
  img: string;
  partyColour: string;
  constituancy: string;
  membershipEndDate: string;
};

export class MemberCard {
  private container: HTMLElement;

  constructor(selector: string) {
    const element = document.querySelector(selector) as HTMLElement | null;

    if (!element) {
      throw new Error(`Container ${selector} not found`);
    }

    this.container = element;
  }

  render(member: Member): void {
    const { name, img, partyColour, constituancy, membershipEndDate } = member;
    const isMembershipExpired: boolean = DateHelper.isEarlier(membershipEndDate);

    this.container.innerHTML = `
            <article class="member-card">
                <img src="${img}" alt="" class="member-card__image" style="border-color:#${partyColour};"/>
                <div class="member-card__details-wrapper">
                    <p class="member-card__info">Member Party</p>
                    <h2 class="member-card__title">${name}</h2>
                    <p class="member-card__subtitle">${constituancy}</p>
                    <p class="member-card__tagline${isMembershipExpired ? '' : ' disabled'}">No longer serving</p>
                </div>
            </article>
        `;
  }
}
