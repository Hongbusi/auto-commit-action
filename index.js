const fs = require('fs')
const core = require('@actions/core')
const dayjs = require('dayjs')

function getDate() {
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return dayjs().add('8', 'hour').format('YYYY-MM-DD')
}

function getContent() {
  return `# Auto commit - ${getDate()}` 
}

async function run() {
  try {
    fs.writeFileSync('README.md', getContent())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
