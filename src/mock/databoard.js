import Mock from 'mockjs'

const userList = []
const expenseList = []
const withdrawalList = []
const dynamicList = []
const count = 100

for (let i = 0; i < count; i++) {
    userList.push(Mock.mock({
        userId: '@increment',
        userAccountName: '@title(5, 10)',
        userName: '@first',
        userSex: '男',
        userEmail: +Mock.Random.date('T'),
        userLocation: '中国，无锡',
        userGmtCreate: '@datetime',
        userPhoneNumber: 18812345678,
        userLastLogin: '@datetime',
        userLoginCount: '@datetime',
        isUserDeleted: false,
        userRole: 'user'
    }))

    expenseList.push(Mock.mock({
        userId: '@increment',
        userAccountName: '@title(5, 10)',
        spendMoney: '@natural(1, 800)',
        spendTime: '@datetime'
    }))

    withdrawalList.push(Mock.mock({
        id: '@increment',
        withdrawalMoney: '@natural(1,900)',
        withdrawalTime: '@datetime'
    }))

    dynamicList.push(Mock.mock({
        userId: '@increment',
        userAccountName: '@title(5, 10)',
        userName: '@first',
        userSex: '男',
        userEmail: +Mock.Random.date('T'),
        userLocation: '中国，无锡',
        userGmtCreate: '@datetime',
        userPhoneNumber: 18812345678,
        userLastLogin: '@datetime',
        userLoginCount: '@datetime',
        isUserDeleted: false,
        userRole: 'user'
    }))
}

export default {
    getUserList: () => ({
        userList: userList
    }),
    getExpenseList: () => ({
        expenseList: expenseList
    }),

    getWithdrawalList: () => ({
        withdrawalList: withdrawalList
    }),

    getDynamicList: () => ({
        dynamicList: dynamicList
    })
}