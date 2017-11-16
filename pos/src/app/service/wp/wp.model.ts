/**
 * Created by ikhlasfirlana on 11/16/17.
 */


// Model Response
export class WpModel {
  id: string;
  title: {
    rendered: string
  };

  constructor(id: string, title: any) {
    this.id = id;
    this.title = title;
  }
}
