/*
MIT License

Copyright (c) 2017-2018 dirigeants

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const { Language, util } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: (key) => `${key} wurde noch nicht für de-DE übersetzt.`,
			DEFAULT_LANGUAGE: 'Standard Sprache',
			SETTING_GATEWAY_EXPECTS_GUILD: 'Der Parameter <Guild> erwartet entweder einen Server oder ein Serverobjekt.',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `Für das Attribut ${key} ist der Wert ${data} nicht vorhanden.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `Für das Attribut ${key} ist der Wert ${data} bereits vorhanden.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'Du musst einen Wert angeben, um etwas hinzu zu fügen oder zu filtern.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `Das Attribut ${key} ist kein Array.`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `Das Attribut ${key} existiert nicht im aktuellen Datenschema.`,
			SETTING_GATEWAY_INVALID_TYPE: 'Der Parameter "type" muss entweder hinzugefügt oder gelöscht werden.',
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} muss ein gültiger ${piece} Name sein.`,
			RESOLVER_INVALID_MESSAGE: (name) => `${name} muss eine gültige Message-ID sein.`,
			RESOLVER_INVALID_USER: (name) => `${name} muss ein "mention" oder eine gültige User-ID sein.`,
			RESOLVER_INVALID_MEMBER: (name) => `${name} muss eine Benutzererwähnung oder eine gültige User ID sein.`,
			RESOLVER_INVALID_CHANNEL: (name) => `${name} muss eine Kanalerwähnung oder eine gültige Kanal ID sein.`,
			RESOLVER_INVALID_GUILD: (name) => `${name} muss eine gültige Server-ID sein.`,
			RESOLVER_INVALID_ROLE: (name) => `${name} muss eine Rollenerwähnung oder eine gültige Rollen ID sein.`,
			RESOLVER_INVALID_LITERAL: (name) => `Deine Auswahl entspricht nicht der einzigen Möglichkeit: ${name}`,
			RESOLVER_INVALID_BOOL: (name) => `${name} muss 'true' oder 'false' sein.`,
			RESOLVER_INVALID_INT: (name) => `${name} muss eine Ganzzahl sein.`,
			RESOLVER_INVALID_FLOAT: (name) => `${name} muss eine gültige Zahl sein.`,
			RESOLVER_INVALID_URL: (name) => `${name} muss eine gültige URL sein.`,
			RESOLVER_STRING_SUFFIX: ' Buchstaben',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} muss genau ${min}${suffix} sein.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} muss zwischen ${min} und ${max}${suffix} sein.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} muss größer als ${min}${suffix} sein.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} muss kleiner als ${max}${suffix} sein.`,
			COMMANDMESSAGE_MISSING: 'Es fehlen ein oder mehrere Argumente am Ende der Eingabe.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} ist ein erforderliches Argument.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Fehlende notwendige Auswahl: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `Deine Auswahl trifft auf keine der folgenden Möglichkeiten zu: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Sie haben **${time}** Sekunden, um einen gültigen Wert einzugeben. Mit "ABORT" brechen Sie den Vorgang ab.`,
			MONITOR_COMMAND_HANDLER_ABORTED: 'Abgebrochen',
			INHIBITOR_COOLDOWN: (remaining) => `Sie haben gerade erst diesen Befehl benutzt. Der Befehl kann von Ihnen wieder in ${remaining} Sekunden verwendet werden.`,
			INHIBITOR_DISABLED: 'Dieser Befehl ist aktuell deaktiviert.',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `Ungenügende Berechtigungen, es fehlt: **${missing}**`,
			INHIBITOR_PERMISSIONS: 'Ihnen fehlt die Berechtigung diesen Befehl auszuführen.',
			INHIBITOR_REQUIRED_SETTINGS: (settings) => `Aufgrund der fehlenden Einstellung **${settings.join(', ')}** kann dieser Befehl nicht ausgeführt werden.`,
			INHIBITOR_RUNIN: (types) => `Dieser Befehl kann nur in ${types} Kanälen ausgeführt werden`,
			INHIBITOR_RUNIN_NONE: (name) => `Der ${name} Befehl wurde nicht für die Benutzung in mindestens einem Kanal aktiviert.`,
			COMMAND_UNLOAD: (type, name) => `✅ Deaktiviert ${type}: ${name}`,
			COMMAND_TRANSFER_ERROR: '❌ Diese Datei wurde bereits übertragen oder hat nie existiert.',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Erfolgreich übertragen ${type}: ${name}`,
			COMMAND_TRANSFER_FAILED: (type, name) => `Übertrag von ${type}: ${name} zum Client fehlgeschlagen. Bitte überprüfe deine Konsole.`,
			COMMAND_RELOAD: (type, name) => `✅ Neu geladen ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type) => `✅ Alle ${type} neu geladen.`,
			COMMAND_REBOOT: 'Am neustarten...',
			COMMAND_PING: 'Ping?',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (Hin und zurück dauerte: ${diff}ms. Herzschlag: ${ping}ms.)`,
			COMMAND_INVITE_SELFBOT: 'Wieso solltest du einen Einladungslink für einen Selfbot benötigen...',
			COMMAND_INVITE: (client) => [
				`Um ${client.user.username} zu Ihrem Disord Server hinzuzufügen, bitte folgenden Link klicken:`,
				client.invite,
				util.codeBlock('', [
					'Der oben dargestellte Link wurde auf eine solche Art und Weise erzeugt, dass nur diejenigen Berechtigungen abgefragt',
					'werden, welche für die Benutzung aller aktuellen Befehle notwendig sind. Bezüglich der Berechtigungen kann man es nicht',
					'allen recht machen, deswegen steht es auch jedem offen jede einzelne Berechtigungsvergabe entsprechend zu deaktivieren.',
					'',
					'Falls Sie einen Befehl verwenden wollen, für dessen Ausführung der Bot zusätzliche Berechtigungen benötigt, welche',
					'von Ihnen nicht vergeben wurden, werden Sie bei dem Versuch den Befehl auszuführen eine Benachrichtigung erhalten.'
				].join(' ')),
				"Falls Sie einen Fehler finden, würde ich Sie bitten einen 'Issue' auf <https://github.com/dirigeants/klasa> zu erstellen."
			],
			COMMAND_INFO: [
				"Klasa ist ein 'plug-and-play' Framework, welches auf der Discord.js Bibliothek basiert.",
				'Der größte Anteil des Codes ist modular aufgebauft. Dies erlaubt es allen Entwicklern,',
				'Klasa enstprechend ihrer Anforderungen anzupassen',
				'',
				'Anbei einige der Vorzüge des Klasa Frameworks:',
				'• 🐇💨 Schnelle Ladezeiten mit ES2017 Unterstützung (`async`/`await`)',
				'• 🎚🎛 Server settings für jeden Server individuell und kann durch eigenen Code erweitern werden',
				"• 💬 Anpassbares Befehlsystem mit automatisierter Übersetzung der Befehlsargumente ('Usage Parsing')",
				'• 🔁 Module können sehr einfach neu geladen und heruntergeladen werden',
				"• 👀 'Monitore' überwachen jede Nachricht und agierend je nach Logik, wie bei einem konventionellen 'message event' system (Wortfilter, Spam protection, etc.)",
				"• ⛔ 'Inhibitors' können die Ausführung von Befehlen verhindern, basierend auf unterschiedlichen Parametern (Berechtigungen, Blacklists, etc.)",
				"• 🗄 'Providers' erlauben Ihnen sich mit mit einer externen Datenbank Ihrer Wahl zu verbinden.",
				"• ✅ 'Finalizers', welche nach einer erfolreichen Durchführung eines Befehls ausgeführt werden",
				"• ➕ 'Extenables' als passiv agierender Code. Sie fügen bestehenden Discord.js Klassen neue Methoden und Eigenschaften hinzu.",
				"• 🌐 'Languages', welche es erlauben, den Bot in mehrere Sprachen zu übersetzen",
				"• ⏲ 'Tasks', welche es erlauben, den Bot Verzögert oder Geplante Aufgaben auszuführen zu lassen",
				'',
				'Wir versuchen ein zu 100% anpassbares Framework zu sein, welches es schafft den unterschiedlichen Ansprüchen gerecht zu werden.',
				'Ebenso veröffentlichen wir regelmässig Aktualisierungen und Fehlerbehebungen.',
				'Falls wir Ihr Interesse für das Klasa Framework wecken konnten, besuchen Sie bitte https://klasa.js.org für weiterführende Informationen.'
			],
			COMMAND_HELP_DM: '📥 | Alle für Sie verfügbaren Befehle wurden Ihnen per Direktnachricht zugeschickt.',
			COMMAND_HELP_NODM: '❌ | Ich konnte Ihnen keine Direktnachricht schicken, da Sie den Erhalt von Direktnachrichten deaktiviert haben.',
			COMMAND_ENABLE: (type, name) => `+ Erfolgreich ${type}: ${name} aktiviert`,
			COMMAND_DISABLE: (type, name) => `+ Erfolgreich ${type}: ${name} deaktiviert`,
			COMMAND_DISABLE_WARN: 'Sie sollten diesen Befehl nicht deaktivieren, da Sie danach nicht mehr befähigt wären, irgendeinen Befehl wieder zu aktivieren.',
			COMMAND_CONF_NOKEY: 'Sie müssen ein Attribut angeben',
			COMMAND_CONF_NOVALUE: 'Sie müssen einen Wert angeben',
			COMMAND_CONF_ADDED: (value, key) => `Erfolgreich den Wert \`${value}\` zum Attribut: **${key}** hinzugefügt`,
			COMMAND_CONF_UPDATED: (key, response) => `Erfolgreiche Aktualisierung des Attributs **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: 'Dieses Attribut ist nicht vom Typ "array". Bitte benutzen Sie stattdessen die Aktion \'reset\'.',
			COMMAND_CONF_REMOVE: (value, key) => `Erfolgreich den Wert \`${value}\` vom Attribut: **${key}** entfernt`,
			COMMAND_CONF_GET_NOEXT: (key) => `Es scheint so, dass das Attribut **${key}** nicht existiert.`,
			COMMAND_CONF_GET: (key, value) => `Der hinterlegte Wert des Attributs **${key}** ist: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `Das Attribut **${key}** wurde zurückgesesetzt auf: \`${response}\``
		};
	}

};
