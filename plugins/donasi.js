let handler = async m => m.reply(`
╭─「 Donasi • Terimakasi 」
│ • https://sociabuzz.com/zanz
│ • https://sociabuzz.com/zanz
│ • https://sociabuzz.com/zanz
│ • https://sociabuzz.com/zanz
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler