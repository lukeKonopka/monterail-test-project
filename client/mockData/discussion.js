const discussion = {
  post: {
    id: 1,
    user: {
      id: 1,
      name: 'Eva',
      avatarUrl: 'https://api.adorable.io/avatars/128/eva.png'
    },
    type: 'question',
    title: 'Will insulin make my patient gain weight?',
    content: 'All my patients with diabetes should see an opthalmologist yerly for a dialated eye examination- beginning at diagnosis inpeople with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with know eye disease, symptoms of blurred vision in one eye, or blind spots may need to see their ophthalmologist more frequently.',
    upvotes: 19,
    comments: [
      {
        id: 100,
        user: {
          id: 2,
          name: 'Patricia',
          avatarUrl: 'https://api.adorable.io/avatars/128/patricia.png'
        },
        date: 1491442800,
        type: 'comment',
        content: 'Numbness or tingling in your feet should be reported to your doctor at your regular visits.',
        upvotes: 8,
        comments: [
          {
            id: 110,
            user: {
              id: 3,
              name: 'David',
              avatarUrl: 'https://api.adorable.io/avatars/128/david.png'
            },
            date: 1491442800,
            type: 'comment',
            content: 'You should check your feet daily for redness, caluses, cracks or skin breakdown.',
            upvotes: 2,
            comments: []
          },
          {
            id: 120,
            user: {
              id: 4,
              name: 'Mark',
              avatarUrl: 'https://api.adorable.io/avatars/128/mark.png'
            },
            date: 1491442800,
            type: 'comment',
            content: 'Numbness or tingling in your feet should be reported to your doctor at your regular visits.',
            upvotes: 10,
            comments: []
          }
        ]
      },
      {
        id: 100,
        user: {
          id: 11,
          name: 'Joseph',
          avatarUrl: 'https://api.adorable.io/avatars/128/joseph.png'
        },
        date: 1491442800,
        type: 'comment',
        content: 'When your blod sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.',
        upvotes: 3,
        comments: []
      }
    ]
  }
}

export default discussion
