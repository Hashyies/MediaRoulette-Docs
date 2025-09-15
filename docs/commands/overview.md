---
sidebar_position: 1
---

# Commands Overview

MediaRoulette offers a variety of commands to fetch random content from across the web. All commands are slash commands, making them easy to discover and use.

## Main Commands

### `/random <source>`

The primary command for getting random content. You can specify different sources to get different types of content.

**Usage:** `/random <source> <query> <shouldcontinue>`

**Available Sources:**
- `all` - Randomly pick between default weighted sources
- `picsum` - Random picture from picsum stock
- `imgur` - Randomly get an ID from imgur thats valid
- `rule34` - Randomly get a nsfw picture from rule34.xxx
- `google` - Randomly pick a picture from search query (Supports query)
- `reddit` - Randomly pick a subreddit and get a picture/text (Supports query, subreddits only for now)
- `4chan` - Randomly picks a thread with a picture from boards (Supports query)
- `movie` - Get a random movie from TMDB
- `youtube` - Get a YouTube video
- `shorts` - Get a random YouTube short
- `urban` - Get a word from the urban dictionary

**Examples:**
```
/random all
/random reddit query:memes
/random rule34 shouldcontinue:True
```

### `/support`

Get help and information about the bot, including all available commands and sources.

**Usage:** `/support`

This command will show you:
- A way to join the support server
- This documentation
- A few tips to use the bot

## Additional Commands

### `/info <choice>`

Get information about the bot or your account.

**Usage:** `/info <choice>`

**Available Choices:**
- `bot` - Display bot information, statistics, and features
- `me` - Show your personal account information and usage stats

**Examples:**
```
/info bot
/info me
```

### `/chances`

Alter the probability chances for different sources when using `/random all`.

**Usage:** `/chances`

This command allows you to:
- View current source probability weights
- Modify chances for specific sources
- Reset to default weights
- Customize your random content experience

### `/favorites`

Manage your favorite content and sources.

**Usage:** `/favorites`

**Features:**
- Save your favorite random results
- **Free users**: Up to 25 favorites
- **Premium users**: Up to 50 favorites
- Quick access to saved content
- Organize and manage your collection

### `/settings`

Configure bot settings and dictionary assignments.

**Usage:** `/settings`

This command allows you to:
- Adjust personal bot preferences
- Configure dictionary assignments
- Modify content filtering options
- Customize your MediaRoulette experience

### `/dictionary`

Configure and manage custom dictionaries for enhanced content filtering and sourcing.

**Usage:** `/dictionary`

**Features:**
- Create custom content dictionaries
- Configure source-specific filters
- Manage keyword associations
- Enhance content relevance and quality

## Command Features

- **Slash Commands**: All commands use Discord's modern slash command system
- **Auto-complete**: Source names will auto-complete as you type
- **Permissions**: Some sources (like NSFW) require appropriate channel settings
- **Server & DM Support**: Commands work in both servers and direct messages

## Getting Started

1. Type `/` in any channel or DM with MediaRoulette
2. Select the command you want to use
3. For `/random`, choose a source from the dropdown
4. Press Enter to execute the command

That's it! MediaRoulette will fetch and display random content based on your selected source.