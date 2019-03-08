import request from '@/api/request'
const commonPath = 'mock-safety/'
//安全运行
export function eventCount(data) {
  return request({
    url: commonPath + 'safeOperation/eventCount',
    params: data
  })
}
export function warningCount(data) {
  return request({
    url: commonPath + 'safeOperation/warningCount',
    params: data
  })
}
export function deviceStatusCount(data) {
  return request({
    url: commonPath + 'safeOperation/deviceStatusCount',
    params: data
  })
}
export function securityCount(data) {
  return request({
    url: commonPath + 'safeOperation/securityCount',
    params: data
  })
}
export function peopleFlowCount(data) {
  return request({
    url: commonPath + 'safeOperation/peopleFlowCount',
    params: data
  })
}
export function carCount(data) {
  return request({
    url: commonPath + 'safeOperation/carCount',
    params: data
  })
}
export function warningInfo(data) {
  return request({
    url: commonPath + 'safeOperation/warningInfo',
    params: data
  })
}
export function alarmInfo(data) {
  return request({
    url: commonPath + 'safeOperation/alarmInfo',
    params: data
  })
}
export function medicalInstitutions(data) {
  return request({
    url: commonPath + 'safeOperation/medicalInstitutions',
    params: data
  })
}
export function polices(data) {
  return request({
    url: commonPath + 'safeOperation/polices',
    params: data
  })
}
export function keyPlaces(data) {
  return request({
    url: commonPath + 'safeOperation/keyPlaces',
    params: data
  })
}
export function videoSurveillances(data) {
  return request({
    url: commonPath + 'safeOperation/videoSurveillances',
    params: data
  })
}
export function defenseFacilities(data) {
  return request({
    url: commonPath + 'safeOperation/defenseFacilities',
    params: data
  })
}
//感知设备
export function distribute(data) {
  return request({
    url: commonPath + 'senor/videosource/distribute',
    params: data
  })
}
export function technical(data) {
  return request({
    url: commonPath + 'senor/defensetechnical/status',
    params: data
  })
}
export function physical(data) {
  return request({
    url: commonPath + 'senor/defensephysical/status',
    params: data
  })
}
export function abnormal(data) {
  return request({
    url: commonPath + 'senor/abnormaldevice/info',
    params: data
  })
}
export function firefighting(data) {
  return request({
    url: commonPath + 'senor/firefighting/status?type='+data,
    method: 'get',
  })
}
export function devicetotal(data) {
  return request({
    url: commonPath + 'senor/devicetotal/info',
    params: data
  })
}
//舆情分析  
export function hotspot(data) {
  return request({
    url: commonPath + 'popular-opinion/hotspot',
    params: data
  })
}
export function opinionKey(data) {
  return request({
    url: commonPath + 'popular-opinion/key',
    params: data
  })
}
export function special(data) {
  return request({
    url: commonPath + 'popular-opinion/special',
    params: data
  })
}
export function opinionSum(data) {
  return request({
    url: commonPath + 'popular-opinion/sum',
    params: data
  })
}
export function currentDay(data) {
  return request({
    url: commonPath + 'popular-opinion/current-day/statistics',
    params: data
  })
}
export function activeMedia(data) {
  return request({
    url: commonPath + 'popular-opinion/active-media/statistics',
    params: data
  })
}
export function mediaSource(data) {
  return request({
    url: commonPath + 'popular-opinion/media-source/statistics',
    params: data
  })
}
//人与车
// export function carflowList() {
//   return request({
//     url: commonPath + 'judgement/keyarea/carflowList',
//   })
// }
export function peopleflowList(data) {
  return request({
    url: commonPath + 'judgement/keyarea/peopleflowList',
    params: data
  })
}
export function peopleList(data) {
  return request({
    url: commonPath + 'people/peopleList',
    params: data
  })
}
export function peopleAndcar(data) {
  return request({
    url: commonPath + 'car/statisticsPeopleAndcar',
    params: data
  })
}
export function peopleWarningList(data) {
  return request({
    url: commonPath + 'judgement/keyarea/peopleWarningList',
    params: data
  })
}
export function carWarningList(data) {
  return request({
    url: commonPath + 'judgement/keyarea/carWarningList',
    params: data
  })
}
export function carList(data) {
  return request({
    url: commonPath + 'car/carList',
    params: data
  })
}
export function videoList(data) {
  return request({
    url: commonPath + 'video/videoList',
    params: data
  })
}
export function parkList(data) {
  return request({
    url: commonPath + 'park/parkList',
    params: data
  })
}
//保障力量
// 当前时间
export function	nowTime(data) { //写死的时间
    return request({
        url:'/mock-command/' + 'datetime/now',
        methods: 'get',
        params:data
    })
}
// 今日待命总人数
export function personnelToday(data) {
  return request({
    url: commonPath + 'personnel/today',
    methods: 'get',
    params: data
  })
}
export function personnelIncrement(data) {
  return request({
    url: commonPath + 'personnel/increment',
    methods: 'get',
    params: data
  })
}
export function personnelRatio(data) {
  return request({
    url: commonPath + 'personnel/ratio',
    methods: 'get',
    params: data
  })
}
export function personnelType(data) {
  return request({
    url: commonPath + 'personnel/type',
    methods: 'get',
    params: data
  })
}
// 人员信息
export function personnelList(data) {
  return request({
    url: commonPath + 'personnel/list',
    methods: 'get',
    params: data
  })
}
// 各小类车辆数量
export function totalVehicle(data) {
  return request({
    url: commonPath + 'car/number',
    methods: 'get',
    params: data
  })
}
// 各小类车辆数量
export function vehicle(data) {
  return request({
    url: commonPath + 'car/small',
    methods: 'get',
    params: data
  })
}
// 各大类车辆数量统计
export function vehicleSummary(data) {
  return request({
    url: commonPath + 'car/big',
    methods: 'get',
    params: data
  })
}
// 生命保障物资
export function safeguardMaterial(data) {
  return request({
    url: commonPath + 'material/safeguard',
    methods: 'get',
    params: data
  })
}
// 生命救助物资
export function succorMaterial(data) {
  return request({
    url: commonPath + 'material/succor',
    methods: 'get',
    params: data
  })
}
// 医疗救护物资
export function medicalMaterial(data) {
  return request({
    url: commonPath + 'material/medical',
    methods: 'get',
    params: data
  })
}
// 个人防护护物资
export function personalMaterial(data) {
  return request({
    url: commonPath + 'material/personal',
    methods: 'get',
    params: data
  })
}