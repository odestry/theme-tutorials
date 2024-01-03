class CollapsibleDetails extends HTMLElement {
  constructor() {
    super();
    if (relapse) {
      relapse(this);
    }
  }
}

customElements.define('collapsible-details', CollapsibleDetails);
