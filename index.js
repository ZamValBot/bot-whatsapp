import makeWASocket from "@whiskeysockets/baileys"

async function startBot() {
    const sock = makeWASocket()

    sock.ev.on("messages.upsert", async (m) => {
        const msg = m.messages[0]
        if (!msg.message) return

        const text = msg.message.conversation || ""
        const from = msg.key.remoteJid

        if (text === "/menu") {
            await sock.sendMessage(from, {
                text: "🤖 MENU\n\n/menu\n/ping\n/owner"
            })
        }

        if (text === "/ping") {
            await sock.sendMessage(from, {
                text: "🏓 Bot activo"
            })
        }

        if (text === "/owner") {
            await sock.sendMessage(from, {
                text: "👑 Bot creado por ti"
            })
        }
    })
}

startBot()
