const users = [
  {
    id: 1,
    name: 'Dr. Halima',
    avatarUrl: 'https://api.adorable.io/avatars/128/halima.png',
    memberSince: 1484179200,
    lastSeen: 1491442800,
    activity: 2,
    stats: {
      peers: 46,
      discussions: 29,
      findings: 19,
      questions: 10
    },
    usersWhoJoinedThen: [
      {
        name: 'SEN Waweru',
        id: 10,
        avatarUrl: 'https://api.adorable.io/avatars/128/waweru.png'
      },
      {
        name: 'Patricia',
        id: 11,
        avatarUrl: 'https://api.adorable.io/avatars/128/particia.png'
      },
      {
        name: 'Joseph Aluoch',
        id: 12,
        avatarUrl: 'https://api.adorable.io/avatars/128/aluoch.png'
      }
    ],
    hottestDiscussion: {
      id: 1,
      title: 'Vegan diet to stop diabetes progress',
      type: 'finding',
      foundOn: 'The guardian',
      user: {
        name: 'Andrew',
        id: 13,
        avatarUrl: 'https://api.adorable.io/avatars/128/andrew.png'
      },
      stats: {
        peers: 6,
        related: 3,
        convos: 3,
        upvotes: 19
      }
    }
  }
]

export default users
