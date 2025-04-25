import '../styles/main.scss';
import { MemberCard } from '../components/cards/memberCard/memberCard';
import { MemberCardHandler } from '../controllers/memberCardHandler';

class Main {
  private memberCardHandler: MemberCardHandler;

  constructor() {
    const card = new MemberCard('main');
    this.memberCardHandler = new MemberCardHandler(card);
    this.init();
  }

  private init(): void {
    this.memberCardHandler.init();
  }
}

new Main();
