const client = require('contentful').createClient({
    space: '9vpzzn4fqhve',
    accessToken: 'M3CBOP8VMQxavJp2YClsxeOIZtOKzrUxr88ODj2Y-Ck'
  })
  
  const getBlogPosts = () => client.getEntries().then(response => response.items)
  
  const getSinglePost = slug =>
    client
      .getEntries({
        'fields.slug': slug,
        content_type: 'Wisata Yogyakarta'
      })
      .then(response => response.items)
  
  
  
  export { getBlogPosts, getSinglePost }