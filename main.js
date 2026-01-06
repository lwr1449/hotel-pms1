// main.js 最顶部添加这段初始化代码
// 1. 替换成你自己的LeanCloud AppID和AppKey（去LeanCloud控制台看）
const APP_ID = "IaRgqtY5ZsQ72Au6jlp9Hsaf-gzGzoHsz";
const APP_KEY = "joOWlusq1YBc1QyEAcgZEHxv";

// 2. 正确初始化LeanCloud（修复LocalStorageAdapter和Not initialized）
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  // 修复LocalStorageAdapter错误：不用new，直接指定storageAdapter
  storageAdapter: AV.LocalStorageAdapter // 去掉new，因为它不是构造函数
});
// 酒店管理系统 - LeanCloud 版本主要JavaScript文件

// ==================== LeanCloud 初始化 ====================
// 1. 先检查是否已经初始化，避免重复初始化（解决重复初始化提示）
if (!AV.applicationId) {
  // 2. 配置存储适配器（解决 storage adapter is not configured 错误）
  AV.setStorageAdapter(AV.LocalStorageAdapter());
  
  // 3. 初始化 LeanCloud（替换成你自己的 AppID、AppKey、服务器地址）
  AV.init({
    appId: 'IaRgqtY5ZsQ72Au6jlp9Hsaf-gzGzoHsz', // 替换成控制台的AppID
    appKey: 'joOWlusq1YBc1QyEAcgZEHxv', // 替换成控制台的AppKey
    serverURL: 'https://iargqty5.lc-cn-n1-shared.com' // 替换成控制台的服务器地址
  });
}

// 房间数据结构（仅用于首次初始化）
const roomData = [
    { number: '101', type: '纯净自然商务双床房', floor: 1 },
    { number: '102', type: '纯净自然商务双床房', floor: 1 },
    { number: '103', type: '纯净自然商务双床房', floor: 1 },
    { number: '105', type: '纯净自然商务双床房', floor: 1 },
    { number: '106', type: '纯净自然商务双床房', floor: 1 },
    { number: '107', type: '纯净自然商务双床房', floor: 1 },
    { number: '108', type: '纯净自然商务双床房', floor: 1 },
    { number: '109', type: '纯净自然商务双床房', floor: 1 },
    { number: '110', type: '纯净自然商务双床房', floor: 1 },
    { number: '111', type: '纯净自然商务双床房', floor: 1 },
    { number: '201', type: '豪华家庭房', floor: 2 },
    { number: '202', type: '纯净自然双床房', floor: 2 },
    { number: '203', type: '商务双床房', floor: 2 },
    { number: '205', type: '豪华大床房', floor: 2 },
    { number: '206', type: '商务大床房', floor: 2 },
    { number: '207', type: '纯净自然双床房', floor: 2 },
    { number: '208', type: '纯净自然双床房', floor: 2 },
    { number: '209', type: '商务双床房', floor: 2 },
    { number: '210', type: '商务双床房', floor: 2 },
    { number: '211', type: '商务大床房', floor: 2 },
    { number: '212', type: '豪华大床房', floor: 2 },
    { number: '301', type: '豪华家庭房', floor: 3 },
    { number: '302', type: '纯净自然双床房', floor: 3 },
    { number: '303', type: '纯净自然双床房', floor: 3 },
    { number: '305', type: '景观大床房', floor: 3 },
    { number: '306', type: '景观双床房', floor: 3 },
    { number: '307', type: '景观大床房', floor: 3 },
    { number: '308', type: '景观大床房', floor: 3 },
    { number: '309', type: '景观大床房', floor: 3 },
    { number: '310', type: '景观大床房', floor: 3 },
    { number: '311', type: '豪华大床房', floor: 3 },
    { number: '312', type: '豪华双床房', floor: 3 },
    { number: '401', type: '景观大床房', floor: 4 },
    { number: '402', type: '景观大床房', floor: 4 },
    { number: '403', type: '景观大床房', floor: 4 },
    { number: '405', type: '雅致大床房', floor: 4 },
    { number: '406', type: '商务双床房', floor: 4 },
    { number: '407', type: '豪华大床房', floor: 4 },
    { number: '408', type: '豪华大床房', floor: 4 },
    { number: '409', type: '豪华大床房', floor: 4 },
    { number: '410', type: '商务大床房', floor: 4 },
    { number: '411', type: '豪华大床房', floor: 4 },
    { number: '412', type: '豪华双床房', floor: 4 },
    { number: '501', type: '商务大床房', floor: 5 },
    { number: '502', type: '商务大床房', floor: 5 },
    { number: '503', type: '商务大床房', floor: 5 },
    { number: '505', type: '雅致大床房', floor: 5 },
    { number: '506', type: '商务双床房', floor: 5 },
    { number: '507', type: '豪华大床房', floor: 5 },
    { number: '508', type: '豪华大床房', floor: 5 },
    { number: '509', type: '豪华大床房', floor: 5 },
    { number: '510', type: '商务大床房', floor: 5 },
    { number: '511', type: '豪华大床房', floor: 5 },
    { number: '512', type: '豪华双床房', floor: 5 },
    { number: '601', type: '商务大床房', floor: 6 },
    { number: '602', type: '商务大床房', floor: 6 },
    { number: '603', type: '商务大床房', floor: 6 },
    { number: '605', type: '雅致大床房', floor: 6 },
    { number: '606', type: '商务双床房', floor: 6 },
    { number: '607', type: '豪华大床房', floor: 6 },
    { number: '608', type: '豪华大床房', floor: 6 },
    { number: '609', type: '豪华大床房', floor: 6 },
    { number: '610', type: '商务大床房', floor: 6 },
    { number: '611', type: '豪华大床房', floor: 6 },
    { number: '612', type: '豪华双床房', floor: 6 },
    { number: '701', type: '商务大床房', floor: 7 },
    { number: '702', type: '商务大床房', floor: 7 },
    { number: '703', type: '商务大床房', floor: 7 },
    { number: '705', type: '雅致大床房', floor: 7 },
    { number: '706', type: '商务双床房', floor: 7 },
    { number: '707', type: '豪华大床房', floor: 7 },
    { number: '708', type: '豪华大床房', floor: 7 },
    { number: '709', type: '豪华大床房', floor: 7 },
    { number: '710', type: '商务大床房', floor: 7 },
    { number: '711', type: '豪华大床房', floor: 7 },
    { number: '712', type: '豪华双床房', floor: 7 },
    { number: '801', type: '商务大床房', floor: 8 },
    { number: '802', type: '商务大床房', floor: 8 },
    { number: '803', type: '商务大床房', floor: 8 },
    { number: '805', type: '雅致大床房', floor: 8 },
    { number: '806', type: '商务双床房', floor: 8 },
    { number: '807', type: '豪华大床房', floor: 8 },
    { number: '808', type: '豪华大床房', floor: 8 },
    { number: '809', type: '豪华大床房', floor: 8 },
    { number: '810', type: '商务大床房', floor: 8 },
    { number: '811', type: '豪华大床房', floor: 8 },
    { number: '812', type: '豪华双床房', floor: 8 },
    { number: '901', type: '商务大床房', floor: 9 },
    { number: '902', type: '商务大床房', floor: 9 },
    { number: '903', type: '商务大床房', floor: 9 },
    { number: '905', type: '雅致大床房', floor: 9 },
    { number: '906', type: '商务双床房', floor: 9 },
    { number: '907', type: '商务大床房', floor: 9 },
    { number: '908', type: '商务大床房', floor: 9 },
    { number: '909', type: '商务大床房', floor: 9 },
    { number: '910', type: '纯净自然大床房', floor: 9 },
    { number: '911', type: '纯净自然双床房', floor: 9 },
    { number: '912', type: '豪华双床房', floor: 9 }
];

// 默认房价表
const defaultRoomRates = {
    '雅致大床房': 288,
    '商务双床房': 268,
    '商务大床房': 258,
    '豪华家庭房': 388,
    '景观双床房': 298,
    '景观大床房': 278,
    '豪华双床房': 318,
    '豪华大床房': 298,
    '纯净自然双床房': 228,
    '纯净自然商务双床房': 248,
    '纯净自然大床房': 218
};

// 初始化数据库
async function initializeDatabase() {
    try {
        // 检查是否已初始化
        const query = new AV.Query('HotelRooms');
        query.limit(1);
        const count = await query.count();
        
        if (count === 0) {
            // 初始化房间数据
            const rooms = roomData.map(room => {
                const Room = AV.Object.extend('HotelRooms');
                const roomObj = new Room();
                roomObj.set('number', room.number);
                roomObj.set('type', room.type);
                roomObj.set('floor', room.floor);
                roomObj.set('status', 'vacant');
                roomObj.set('lastUpdate', new Date().toISOString());
                return roomObj;
            });
            
            // 批量保存
            await AV.Object.saveAll(rooms);
            console.log('房间数据初始化成功');
        }
        
        console.log('数据库初始化完成');
    } catch (error) {
        console.error('初始化失败:', error);
        alert('数据库初始化失败，请检查网络连接');
    }
}

// 获取所有房间
// 找main.js里的getRoomTypes函数，换成这个
async function getRoomTypes() {
  // 先确保加载完房间数据，再用roomData
  const roomData = await getAllRooms(); // 先获取roomData，再后续操作
  const roomTypes = [];
  roomData.forEach(room => {
    if (!roomTypes.includes(room.roomType)) {
      roomTypes.push(room.roomType);
    }
  });
  return roomTypes;
}

// 获取房间类型列表
function getRoomTypes() {
    return [...new Set(roomData.map(room => room.type))];
}

// 获取默认房价
function getDefaultRoomRate(roomType) {
    return defaultRoomRates[roomType] || 200;
}

// 更新房间状态
async function updateRoomStatus(roomNumber, newStatus, note = '') {
    try {
        const query = new AV.Query('HotelRooms');
        query.equalTo('number', roomNumber);
        const room = await query.first();
        
        if (room) {
            const oldStatus = room.get('status');
            room.set('status', newStatus);
            room.set('lastUpdate', new Date().toISOString());
            await room.save();
            
            // 记录状态变更
            await logRoomStatusChange(roomNumber, oldStatus, newStatus, note);
            
            // 广播更新
            broadcastUpdate('roomStatusChanged', { roomNumber, oldStatus, newStatus });
        }
    } catch (error) {
        console.error('更新房间状态失败:', error);
        throw error;
    }
}

// 记录房间状态变更
async function logRoomStatusChange(roomNumber, oldStatus, newStatus, note) {
    try {
        const Log = AV.Object.extend('HotelLogs');
        const log = new Log();
        log.set('roomNumber', roomNumber);
        log.set('oldStatus', oldStatus);
        log.set('newStatus', newStatus);
        log.set('note', note);
        log.set('timestamp', new Date().toISOString());
        await log.save();
    } catch (error) {
        console.error('记录日志失败:', error);
    }
}

// 获取当前在住客人
async function getCurrentGuests() {
    try {
        const query = new AV.Query('HotelGuests');
        query.equalTo('status', 'checked-in');
        query.descending('createdAt');
        const results = await query.find();
        
        return results.map(obj => ({
            id: obj.id,
            guestName: obj.get('guestName'),
            guestPhone: obj.get('guestPhone'),
            guestIdCard: obj.get('guestIdCard'),
            guestCount: obj.get('guestCount'),
            checkinDate: obj.get('checkinDate'),
            checkoutDate: obj.get('checkoutDate'),
            roomRate: obj.get('roomRate'),
            deposit: obj.get('deposit'),
            notes: obj.get('notes'),
            roomNumber: obj.get('roomNumber'),
            roomType: obj.get('roomType'),
            checkinTime: obj.get('checkinTime'),
            status: obj.get('status'),
            createdAt: obj.get('createdAt')
        }));
    } catch (error) {
        console.error('获取在住客人失败:', error);
        return [];
    }
}

// 获取指定房间的当前客人
async function getCurrentGuest(roomNumber) {
    try {
        const query = new AV.Query('HotelGuests');
        query.equalTo('roomNumber', roomNumber);
        query.equalTo('status', 'checked-in');
        const guest = await query.first();
        
        if (guest) {
            return {
                id: guest.id,
                guestName: guest.get('guestName'),
                guestPhone: guest.get('guestPhone'),
                guestIdCard: guest.get('guestIdCard'),
                guestCount: guest.get('guestCount'),
                checkinDate: guest.get('checkinDate'),
                checkoutDate: guest.get('checkoutDate'),
                roomRate: guest.get('roomRate'),
                deposit: guest.get('deposit'),
                notes: guest.get('notes'),
                roomNumber: guest.get('roomNumber'),
                roomType: guest.get('roomType'),
                checkinTime: guest.get('checkinTime'),
                status: guest.get('status'),
                createdAt: guest.get('createdAt')
            };
        }
        return null;
    } catch (error) {
        console.error('获取房间客人失败:', error);
        return null;
    }
}

// 保存入住记录
async function saveCheckinRecord(record) {
    try {
        const Guest = AV.Object.extend('HotelGuests');
        const guest = new Guest();
        
        Object.keys(record).forEach(key => {
            guest.set(key, record[key]);
        });
        
        guest.set('status', 'checked-in');
        guest.set('createdAt', new Date().toISOString());
        
        const savedGuest = await guest.save();
        
        // 广播更新
        broadcastUpdate('guestCheckedIn', {
            id: savedGuest.id,
            ...record,
            status: 'checked-in'
        });
        
        return savedGuest.id;
    } catch (error) {
        console.error('保存入住记录失败:', error);
        throw error;
    }
}

// 处理退房
async function processCheckout(guestId, note = '') {
    try {
        // 获取客人信息
        const guestQuery = new AV.Query('HotelGuests');
        const guest = await guestQuery.get(guestId);
        
        if (guest) {
            const guestData = {
                guestName: guest.get('guestName'),
                guestPhone: guest.get('guestPhone'),
                guestIdCard: guest.get('guestIdCard'),
                guestCount: guest.get('guestCount'),
                checkinDate: guest.get('checkinDate'),
                checkoutDate: guest.get('checkoutDate'),
                roomRate: guest.get('roomRate'),
                deposit: guest.get('deposit'),
                notes: guest.get('notes'),
                roomNumber: guest.get('roomNumber'),
                roomType: guest.get('roomType'),
                checkinTime: guest.get('checkinTime'),
                status: 'checked-out',
                checkoutTime: new Date().toISOString(),
                checkoutNote: note
            };
            
            // 添加到历史记录
            const History = AV.Object.extend('HotelHistory');
            const historyRecord = new History();
            Object.keys(guestData).forEach(key => {
                historyRecord.set(key, guestData[key]);
            });
            await historyRecord.save();
            
            // 从当前客人中删除
            await guest.destroy();
            
            // 广播更新
            broadcastUpdate('guestCheckedOut', {
                guestId,
                roomNumber: guestData.roomNumber
            });
        }
    } catch (error) {
        console.error('处理退房失败:', error);
        throw error;
    }
}

// 获取历史客人记录
async function getHistoryGuests() {
    try {
        const query = new AV.Query('HotelHistory');
        query.descending('checkoutTime');
        const results = await query.find();
        
        return results.map(obj => ({
            id: obj.id,
            guestName: obj.get('guestName'),
            guestPhone: obj.get('guestPhone'),
            guestIdCard: obj.get('guestIdCard'),
            guestCount: obj.get('guestCount'),
            checkinDate: obj.get('checkinDate'),
            checkoutDate: obj.get('checkoutDate'),
            roomRate: obj.get('roomRate'),
            deposit: obj.get('deposit'),
            notes: obj.get('notes'),
            roomNumber: obj.get('roomNumber'),
            roomType: obj.get('roomType'),
            checkinTime: obj.get('checkinTime'),
            checkoutTime: obj.get('checkoutTime'),
            checkoutNote: obj.get('checkoutNote')
        }));
    } catch (error) {
        console.error('获取历史记录失败:', error);
        return [];
    }
}

// 根据ID获取客人信息
async function getGuestById(guestId) {
    try {
        // 先在在住客人中查找
        const currentQuery = new AV.Query('HotelGuests');
        const currentGuest = await currentQuery.get(guestId).catch(() => null);
        
        if (currentGuest) {
            return {
                id: currentGuest.id,
                guestName: currentGuest.get('guestName'),
                guestPhone: currentGuest.get('guestPhone'),
                guestIdCard: currentGuest.get('guestIdCard'),
                guestCount: currentGuest.get('guestCount'),
                checkinDate: currentGuest.get('checkinDate'),
                checkoutDate: currentGuest.get('checkoutDate'),
                roomRate: currentGuest.get('roomRate'),
                deposit: currentGuest.get('deposit'),
                notes: currentGuest.get('notes'),
                roomNumber: currentGuest.get('roomNumber'),
                roomType: currentGuest.get('roomType'),
                checkinTime: currentGuest.get('checkinTime'),
                status: currentGuest.get('status')
            };
        }
        
        // 如果不在在住客人中，查找历史记录
        const historyQuery = new AV.Query('HotelHistory');
        const historyGuest = await historyQuery.get(guestId).catch(() => null);
        
        if (historyGuest) {
            return {
                id: historyGuest.id,
                guestName: historyGuest.get('guestName'),
                guestPhone: historyGuest.get('guestPhone'),
                guestIdCard: historyGuest.get('guestIdCard'),
                guestCount: historyGuest.get('guestCount'),
                checkinDate: historyGuest.get('checkinDate'),
                checkoutDate: historyGuest.get('checkoutDate'),
                roomRate: historyGuest.get('roomRate'),
                deposit: historyGuest.get('deposit'),
                notes: historyGuest.get('notes'),
                roomNumber: historyGuest.get('roomNumber'),
                roomType: historyGuest.get('roomType'),
                checkinTime: historyGuest.get('checkinTime'),
                checkoutTime: historyGuest.get('checkoutTime'),
                checkoutNote: historyGuest.get('checkoutNote')
            };
        }
        
        return null;
    } catch (error) {
        console.error('获取客人信息失败:', error);
        return null;
    }
}

// 获取客人统计数据
async function getGuestStatistics() {
    try {
        const currentGuests = await getCurrentGuests();
        const historyGuests = await getHistoryGuests();
        const today = new Date().toDateString();
        
        const todayCheckinsQuery = new AV.Query('HotelHistory');
        todayCheckinsQuery.greaterThanOrEqualTo('checkinTime', new Date(today));
        const todayCheckins = await todayCheckinsQuery.count();
        
        const todayCheckoutsQuery = new AV.Query('HotelHistory');
        todayCheckoutsQuery.greaterThanOrEqualTo('checkoutTime', new Date(today));
        const todayCheckouts = await todayCheckoutsQuery.count();
        
        return {
            currentGuests: currentGuests.length,
            todayCheckins,
            todayCheckouts,
            totalGuests: currentGuests.length + historyGuests.length
        };
    } catch (error) {
        console.error('获取统计数据失败:', error);
        return {
            currentGuests: 0,
            todayCheckins: 0,
            todayCheckouts: 0,
            totalGuests: 0
        };
    }
}

// 获取财务数据
async function getFinancialData(period) {
    try {
        const historyGuests = await getHistoryGuests();
        const currentGuests = await getCurrentGuests();
        const allGuests = [...historyGuests, ...currentGuests];
        
        const now = new Date();
        let startDate;
        
        switch (period) {
            case 'today':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                break;
            case 'week':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'month':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            case 'year':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
            default:
                startDate = new Date(0);
        }
        
        const filteredGuests = allGuests.filter(guest => {
            const guestDate = new Date(guest.checkinTime || guest.createdAt);
            return guestDate >= startDate;
        });
        
        let roomRevenue = 0;
        let depositTotal = 0;
        let totalOrders = filteredGuests.length;
        
        filteredGuests.forEach(guest => {
            const nights = calculateNights(guest.checkinDate, guest.checkoutDate);
            roomRevenue += nights * guest.roomRate;
            depositTotal += guest.deposit || 0;
        });
        
        const avgRoomRate = totalOrders > 0 ? Math.round(roomRevenue / totalOrders) : 0;
        
        return {
            roomRevenue,
            depositTotal,
            totalOrders,
            avgRoomRate
        };
    } catch (error) {
        console.error('获取财务数据失败:', error);
        return {
            roomRevenue: 0,
            depositTotal: 0,
            totalOrders: 0,
            avgRoomRate: 0
        };
    }
}

// 获取收入趋势数据
async function getRevenueTrendData(period) {
    try {
        const historyGuests = await getHistoryGuests();
        const currentGuests = await getCurrentGuests();
        const allGuests = [...historyGuests, ...currentGuests];
        
        const now = new Date();
        let days = 7;
        let dateFormat = { month: 'short', day: 'numeric' };
        
        switch (period) {
            case 'today':
                days = 1;
                break;
            case 'week':
                days = 7;
                break;
            case 'month':
                days = 30;
                break;
            case 'year':
                days = 12;
                dateFormat = { month: 'short' };
                break;
        }
        
        const dates = [];
        const revenues = [];
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(now);
            if (period === 'year') {
                date.setMonth(now.getMonth() - i);
            } else {
                date.setDate(now.getDate() - i);
            }
            
            const dateStr = period === 'year' ? 
                date.toLocaleDateString('zh-CN', { month: 'short' }) :
                date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
            
            dates.push(dateStr);
            
            // 计算该日期的收入
            let dayRevenue = 0;
            allGuests.forEach(guest => {
                const guestDate = new Date(guest.checkinTime || guest.createdAt);
                if (period === 'year') {
                    if (guestDate.getMonth() === date.getMonth() && guestDate.getFullYear() === date.getFullYear()) {
                        const nights = calculateNights(guest.checkinDate, guest.checkoutDate);
                        dayRevenue += nights * guest.roomRate;
                    }
                } else {
                    if (guestDate.toDateString() === date.toDateString()) {
                        const nights = calculateNights(guest.checkinDate, guest.checkoutDate);
                        dayRevenue += nights * guest.roomRate;
                    }
                }
            });
            
            revenues.push(dayRevenue);
        }
        
        return { dates, revenues };
    } catch (error) {
        console.error('获取收入趋势失败:', error);
        return { dates: [], revenues: [] };
    }
}

// 获取房型收入分布数据
async function getRoomTypeRevenueData(period) {
    try {
        const historyGuests = await getHistoryGuests();
        const currentGuests = await getCurrentGuests();
        const allGuests = [...historyGuests, ...currentGuests];
        
        const roomTypeRevenue = {};
        
        allGuests.forEach(guest => {
            const nights = calculateNights(guest.checkinDate, guest.checkoutDate);
            const revenue = nights * guest.roomRate;
            
            if (roomTypeRevenue[guest.roomType]) {
                roomTypeRevenue[guest.roomType] += revenue;
            } else {
                roomTypeRevenue[guest.roomType] = revenue;
            }
        });
        
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];
        
        return Object.entries(roomTypeRevenue).map(([type, revenue], index) => ({
            name: type,
            value: revenue,
            itemStyle: {
                color: colors[index % colors.length]
            }
        }));
    } catch (error) {
        console.error('获取房型收入分布失败:', error);
        return [];
    }
}

// 获取收入记录
async function getRevenueRecords(period) {
    try {
        const historyGuests = await getHistoryGuests();
        const currentGuests = await getCurrentGuests();
        const allGuests = [...historyGuests, ...currentGuests];
        
        const now = new Date();
        let startDate;
        
        switch (period) {
            case 'today':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                break;
            case 'week':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'month':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            case 'year':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
            default:
                startDate = new Date(0);
        }
        
        const records = allGuests
            .filter(guest => {
                const guestDate = new Date(guest.checkinTime || guest.createdAt);
                return guestDate >= startDate;
            })
            .map(guest => {
                const nights = calculateNights(guest.checkinDate, guest.checkoutDate);
                const roomRevenue = nights * guest.roomRate;
                const total = roomRevenue + guest.deposit;
                
                return {
                    date: guest.checkinTime || guest.createdAt,
                    roomNumber: guest.roomNumber,
                    roomType: guest.roomType,
                    guestName: guest.guestName,
                    roomRate: guest.roomRate,
                    deposit: guest.deposit,
                    total: total
                };
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return records;
    } catch (error) {
        console.error('获取收入记录失败:', error);
        return [];
    }
}

// 计算入住天数
function calculateNights(checkin, checkout) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const diffTime = checkoutDate - checkinDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
}

// 生成唯一ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ==================== 数据同步和广播 ====================

// 创建广播频道用于多标签页同步
let broadcastChannel;
try {
    broadcastChannel = new BroadcastChannel('hotel_pms_sync');
} catch (e) {
    console.log('BroadcastChannel not supported');
}

// 广播更新
function broadcastUpdate(type, data) {
    if (broadcastChannel) {
        broadcastChannel.postMessage({
            type,
            data,
            timestamp: new Date().toISOString()
        });
    }
}

// 监听广播消息
if (broadcastChannel) {
    broadcastChannel.onmessage = function(event) {
        const { type, data } = event.data;
        
        switch (type) {
            case 'roomStatusChanged':
                if (typeof refreshRoomsData === 'function') {
                    refreshRoomsData();
                }
                if (typeof refreshData === 'function') {
                    refreshData();
                }
                break;
            case 'guestCheckedIn':
            case 'guestCheckedOut':
                if (typeof loadCurrentGuests === 'function') {
                    loadCurrentGuests();
                }
                if (typeof loadGuestStatistics === 'function') {
                    loadGuestStatistics();
                }
                if (typeof refreshData === 'function') {
                    refreshData();
                }
                break;
        }
    };
}

// ==================== 通用工具函数 ====================

// 切换侧边栏
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('active');
    
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('active')) {
            mainContent.style.marginLeft = '0';
        } else {
            mainContent.style.marginLeft = '16rem';
        }
    }
}

// 更新当前时间
function updateCurrentTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // 处理重新入住的数据
    if (window.location.pathname.includes('checkin.html')) {
        const rebookGuest = sessionStorage.getItem('rebookGuest');
        if (rebookGuest) {
            const guest = JSON.parse(rebookGuest);
            setTimeout(() => {
                fillRebookData(guest);
            }, 500);
            sessionStorage.removeItem('rebookGuest');
        }
    }
    
    // 初始化数据库（仅在需要时）
    setTimeout(() => {
        initializeDatabase();
    }, 1000);
});

// 填充重新入住数据
function fillRebookData(guest) {
    document.getElementById('guestName').value = guest.guestName;
    document.getElementById('guestPhone').value = guest.guestPhone;
    document.getElementById('guestIdCard').value = guest.guestIdCard || '';
    document.getElementById('guestCount').value = guest.guestCount;
    
    // 设置默认日期
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkinDate').value = today.toISOString().split('T')[0];
    document.getElementById('checkoutDate').value = tomorrow.toISOString().split('T')[0];
}

// 窗口大小改变时处理响应式布局
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        mainContent.style.marginLeft = '16rem';
    } else {
        mainContent.style.marginLeft = '0';
    }
});
