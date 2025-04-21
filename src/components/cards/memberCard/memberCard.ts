import template from './memberCard.html';

export class MemberCard {
    private container: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector) as HTMLElement | null;

        if (!element) {
            throw new Error(`Container ${selector} not found`);
        }
        
        this.container = element;
    }

    render(): void {
        this.container.innerHTML = template;
    }
}