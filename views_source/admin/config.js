var PostPreview = createClass({
    render: function() {
      var entry = this.props.entry;
      var image = entry.getIn(['data', 'featured_image']);
      var bg = this.props.getAsset(image);
      return h('div', {},
        h('h1', {}, entry.getIn(['data', 'title'])),
        h('p', {}, entry.getIn(['data', 'excerpt'])),
        h('p', {}, "By Author Name"),
        h('p', {}, entry.getIn(['data', 'category'])),
        h('img', {src: bg.toString()}),
        h('p', {}, entry.getIn(['data', 'image_caption'])),
        h('div', {"className": "text"}, this.props.widgetFor('body'))
      );
    }
  });

CMS.registerPreviewStyle("document-preview.css");
CMS.registerPreviewTemplate("posts", PostPreview);