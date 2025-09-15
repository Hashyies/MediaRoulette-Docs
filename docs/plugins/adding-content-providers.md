---
sidebar_position: 4
---

# Adding Content Providers

MediaRoulette's plugin system allows you to add new content sources, such as image providers. To do this, you need to create a class that implements the `me.hash.mediaroulette.plugins.Images.ImageSourcePlugin` interface and register it in your plugin's `onEnable()` method.

## ImageSourcePlugin Interface

Your main plugin class must implement the `ImageSourcePlugin` interface. This interface has the following methods:

- `getImageSourceProviders()`: This method should return a list of `ImageSourceProvider` instances that your plugin provides.
- `onImageSourcesRegistered()`: This method is called after your image sources have been registered.
- `onImageSourcesUnregistered()`: This method is called when your image sources are unregistered.

Here is an example of how to implement the `ImageSourcePlugin` interface in your main plugin class:

```java
package me.myplugin;

import me.hash.mediaroulette.plugins.Plugin;
import me.hash.mediaroulette.plugins.Images.ImageSourcePlugin;
import me.hash.mediaroulette.plugins.Images.ImageSourceProvider;
import me.myplugin.content.MyImageSourceProvider;

import java.util.Collections;
import java.util.List;

public class Main extends Plugin implements ImageSourcePlugin {

    private MyImageSourceProvider myImageSourceProvider;

    @Override
    public void onEnable() {
        myImageSourceProvider = new MyImageSourceProvider();
    }

    @Override
    public List<ImageSourceProvider> getImageSourceProviders() {
        return Collections.singletonList(myImageSourceProvider);
    }

    @Override
    public void onImageSourcesRegistered() {
        getLogger().info("MyImageSourceProvider has been registered!");
    }

    @Override
    public void onImageSourcesUnregistered() {
        getLogger().info("MyImageSourceProvider has been unregistered!");
    }
}
```

## ImageSourceProvider Interface

Your `ImageSourceProvider` class must implement the `me.hash.mediaroulette.plugins.Images.ImageSourceProvider` interface. This interface has the following methods:

- `getName()`: The name of your image source.
- `getDisplayName()`: The display name of your image source.
- `getDescription()`: A description of your image source.
- `isEnabled()`: Whether your image source is enabled by default.
- `getRandomImage()`: This method should return a `MediaResult` object containing the URL of a random image.
- `supportsSearch()`: Whether your image source supports search queries.
- `getPriority()`: The priority of your image source. Higher numbers are prioritized.
- `getConfigKey()`: The configuration key for your image source.

:::tip

For a complete example of a content provider plugin, check out the [RedditPlugin on GitHub](https://github.com/MediaRoulette/RedditPlugin).

:::

Here is an example of how to implement the `ImageSourceProvider` interface:

```java
package me.myplugin.content;

import me.hash.mediaroulette.model.User;
import me.hash.mediaroulette.model.content.MediaResult;
import me.hash.mediaroulette.plugins.Images.ImageSourceProvider;
import net.dv8tion.jda.api.interactions.Interaction;

public class MyImageSourceProvider implements ImageSourceProvider {

    @Override
    public String getName() {
        return "myimagesource";
    }

    @Override
    public String getDisplayName() {
        return "My Image Source";
    }

    @Override
    public String getDescription() {
        return "Provides amazing images from my source.";
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public MediaResult getRandomImage(Interaction interaction, User user, String query) throws Exception {
        // Your logic to get a random image
        return new MediaResult("https://example.com/image.jpg",
                "My Title",
                "My Description",
                MediaSource.valueOf("MYIMAGESOURCE"),
                "imageType (create if text only or null for image attachment)",
                "imageContent (the content that will be put on the created image if imageType is create)");   
    }

    @Override
    public boolean supportsSearch() {
        return false;
    }

    @Override
    public int getPriority() {
        return 100;
    }

    @Override
    public String getConfigKey() {
        return "myimagesource";
    }
}
```
