import _ from 'lodash';

export const convertNewFeeds = newFeeds => {
  return newFeeds.map(post => {
    const {
      comments,
      reacts,
      operation,
      name,
      picture,
      params,
      author,
      createdAt
    } = post;
    let content = '';

    switch (operation) {
      case 'create_account':
        const { address } = params;
        content = `${name ? name : author} created ${address}`;
        break;
      case 'payment':
        const { amount, address: adr } = params;
        content = ` ${name ? name : author} transfered ${amount} to ${adr}`;
        break;
      case 'post':
        content = params.content.text;
        break;
      case 'update_account':
        const { value, key } = params;
        switch (key) {
          case 'name':
            content = `updated name to ${value}`;
            break;
          case 'picture':
            content = `updated picture to ${value.length} bytes`;
            break;
          case 'followings':
            content = 'followed: ';
            value.forEach(v => {
              content += v + ', ';
            });
            break;
          default:
            content = '...';
            break;
        }
        break;
      default:
        console.log(post);
        
        content =  _.isEmpty(post.content)? "..." : post.content.text;
        break;
    }
    return { comments, reacts, operation, picture, name, content, createdAt };
  });
};
