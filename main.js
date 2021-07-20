/**
 * @author - This Script is Created by @Nyrok10 (twitter)
 * @template {@link https://github.com/Nyrok/block-o-bot}
 * @license Apache-2.0
 * @version 1.0.0 
 */

const Discord = require('discord.js');
const client = new Discord.Client();
let {
    token,
    protection,
    method,
    reason,
    whitelist
} = require('./config.json');

client.on('guildMemberAdd', async (bot) => {
    if (!bot.user.bot) return;
    const getLogs = await bot.guild.fetchAuditLogs({
        limit: 1,
        type: 28
    });
    if (!getLogs) throw console.logs("I couldn't read logs. Maybe doesn't have 'VIEW_AUDIT_LOGS' permission ?");
    const data = getLogs.entries.first();
    const {
        executor,
        target
    } = data;
    if (!target.bot || protection === false) return;
    whitelist.forEach(user => {
        if (executor.id === user) return;
        else {
            bot.guild.members.fetch(executor.id).then(member => {
                member.roles._roles.forEach(async role => {
                    if (role.permissions.has('MANAGE_GUILD', true)) {
                        return member.roles.remove(role.id, 'Role Permission to Add a bot.').catch((error) => {
                            throw console.log(`I couldn't remove permissions role for ${member.user.tag} (${member.user.id}). Please check if the Guild Member has an higher rank than me.\n` + error);
                        });
                    };
                });
                if (!reason || typeof reason !== "string") reason = "This bot adding isn't allowed.";
                if (!method || method.toUpperCase() !== "BAN" && method.toUpperCase() !== "KICK" || method.toUpperCase() === "KICK" || typeof method !== "string") {
                    return target.kick(reason).catch((error) => {
                        throw console.log("I couldn't kick the new added bot. Maybe we have the same permissions ?\n" + error);
                    });
                } else if (method.toUpperCase() === "BAN") {
                    return target.ban({
                        reason: reason
                    }).catch((error) => {
                        throw console.log("I couldn't ban the new added bot. Maybe we have the same permissions ?\n" + error);
                    });
                };
            });
        };
    });
});

client.login(token);