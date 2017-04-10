const generateAdorableAvatars = (data) => {
  return data.map((page) => {
    return page.map((question) => {
      question.user.avatarUrl = `https://api.adorable.io/avatars/128/${question.user.name}.png`

      question.content.activities = question.content.activities.map((activity) => {
        activity.user.avatarUrl = `https://api.adorable.io/avatars/128/${activity.user.name}.png`

        return activity
      })

      return question
    })
  })
}

const data = [
  [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Eva',
        avatarUrl: ''
      },
      stats: {
        related: 2,
        peers: 8,
        convos: 5
      },
      content: {
        title: 'Will insulin make my patient gain weight?',
        activities: [
          {
            id: 1,
            user: {
              id: 2,
              name: 'Andrew',
              avatarUrl: ''
            },
            type: 'answer'
          },
          {
            id: 2,
            user: {
              id: 2,
              name: 'Patrick',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 3,
            user: {
              id: 2,
              name: 'Jim',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 4,
            user: {
              id: 2,
              name: 'Scott',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 5,
            user: {
              id: 2,
              name: 'Spock',
              avatarUrl: ''
            },
            type: 'comment'
          }
        ]
      }
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'Michael',
        avatarUrl: ''
      },
      stats: {
        related: 1,
        peers: 4,
        convos: 2
      },
      content: {
        title: 'Vegan diet in diabetes treatment?',
        activities: [
          {
            id: 6,
            user: {
              id: 2,
              name: 'Matthew',
              avatarUrl: ''
            },
            type: 'answer'
          },
          {
            id: 7,
            user: {
              id: 2,
              name: 'Tony',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 8,
            user: {
              id: 2,
              name: 'Kevin',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 9,
            user: {
              id: 2,
              name: 'Scott',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 10,
            user: {
              id: 2,
              name: 'Amanda',
              avatarUrl: ''
            },
            type: 'comment'
          },
          {
            id: 11,
            user: {
              id: 2,
              name: 'Johnny',
              avatarUrl: ''
            },
            type: 'comment'
          }
        ]
      }
    }
  ]
]

export default generateAdorableAvatars(data)
