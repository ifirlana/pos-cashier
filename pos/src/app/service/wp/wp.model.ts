/**
 * Created by ikhlasfirlana on 11/16/17.
 */


// Model Response
export class WpModel {
  id: string;
  slug: string;
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };

  constructor(id: string, title: any, slug:string) {
    this.id = id;
    this.title = title;
    this.slug = slug;
  }
}
