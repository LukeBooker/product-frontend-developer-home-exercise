import '../styles/main.scss';
import { MemberCard } from '../components/cards/memberCard/memberCard';

/** Our main application class, extend this as needed. */
class Main {
  private memberCard: MemberCard;

  constructor() {
    this.memberCard = new MemberCard('main');
    this.init();
  }

  private init(): void {
      this.memberCard.render();
  }
}

new Main();
