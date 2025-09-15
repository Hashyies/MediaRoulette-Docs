---
sidebar_position: 3
---

# Adding Commands

To add a new slash command to the bot, you need to create a class that extends `me.hash.mediaroulette.bot.commands.BaseCommand` and register it in your plugin's `onLoad()` method using the static `Bot.addCommands()` method.

## Command Registration

```java
// In your main plugin class
@Override
public void onLoad() {
    Bot.addCommands(new MyCommand());
}
```

## Command Class

Your command class should look something like this:

```java
package me.myplugin.commands;

import me.hash.mediaroulette.bot.commands.BaseCommand;
import me.hash.mediaroulette.bot.utils.CommandCooldown;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;

public class MyCommand extends BaseCommand {

    @Override
    public CommandData getCommandData() {
        return Commands.slash("mycommand", "This is my amazing command.");
    }

    @Override
    @CommandCooldown(value = 5, commands = {"mycommand"})
    public void handleCommand(SlashCommandInteractionEvent event) {
        if (!event.getName().equals("mycommand")) return;

        event.reply("Hello, world!").queue();
    }
}
```

### Command Cooldowns

To add a cooldown to your command, you can use the `@CommandCooldown` annotation. This annotation takes the following parameters:

- `value`: The cooldown time in seconds.
- `commands`: A list of command names to apply the cooldown to.
