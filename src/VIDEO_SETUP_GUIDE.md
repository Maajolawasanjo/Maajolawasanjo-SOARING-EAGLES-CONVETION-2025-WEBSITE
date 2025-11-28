# 🎬 Media Gallery Video Setup Guide

## Overview
Your Media Gallery carousel now supports video playback! Each slide can display a thumbnail image and, when clicked, open a video in a beautiful popup modal.

---

## ✅ What's Been Added

### 1. **Video URL Support**
- Each video slide now has a `videoUrl` field
- Supports YouTube, Vimeo, and MP4 video files
- Thumbnail images remain for all slides

### 2. **Click to Play**
- Video slides display a play button overlay on hover
- Clicking opens the video in a full-screen popup modal
- Image slides remain unchanged (click does nothing)

### 3. **Professional Popup Modal**
- Dark semi-transparent background (90% black with blur)
- Large video player (responsive sizing)
- Close button in top-right corner
- Video title displayed below
- Click outside to close
- Videos autoplay when opened

### 4. **Smart Video Detection**
- Automatically detects YouTube URLs and converts them to embeds
- Automatically detects Vimeo URLs and converts them to embeds
- Supports direct MP4 file URLs
- Handles various URL formats (watch URLs, short URLs, embed URLs)

---

## 📝 How to Add Video URLs

### Step 1: Open the Media.tsx file
Located at: `/components/Media.tsx`

### Step 2: Find the mediaContent array (Lines 6-43)

### Step 3: Add videoUrl to your video slides

**Example:**
```typescript
{
  type: 'video',
  title: 'Soaring Eagles 2024 Highlights',
  date: 'December 2024',
  thumbnail: 'https://images.unsplash.com/...',  // Keep this!
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'  // ✅ Add this line
},
```

---

## 🎥 Supported Video URL Formats

### YouTube URLs (All these work!)
```typescript
// Standard watch URL
videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

// Short URL
videoUrl: 'https://youtu.be/dQw4w9WgXcQ'

// Embed URL (best)
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
```

### Vimeo URLs
```typescript
// Standard URL
videoUrl: 'https://vimeo.com/76979871'

// Player URL (best)
videoUrl: 'https://player.vimeo.com/video/76979871'
```

### Direct MP4 Files
```typescript
videoUrl: 'https://example.com/videos/my-video.mp4'
```

---

## 🛠️ How to Get Your YouTube Video URL

### Method 1: From YouTube Video Page
1. Go to your video on YouTube
2. Click the **"Share"** button below the video
3. Copy the URL (e.g., `https://youtu.be/dQw4w9WgXcQ`)
4. Paste it into the `videoUrl:` field

### Method 2: From YouTube Studio
1. Go to YouTube Studio
2. Find your video
3. Click the video title
4. Copy the **Video ID** from the URL
5. Use format: `https://www.youtube.com/embed/YOUR_VIDEO_ID`

### Method 3: Get Embed Code
1. On YouTube video page, click **"Share"**
2. Click **"Embed"**
3. Find the `src="..."` in the iframe code
4. Copy that URL (e.g., `https://www.youtube.com/embed/dQw4w9WgXcQ`)

---

## 📋 Complete Example: All 6 Slides

```typescript
const mediaContent = [
  {
    type: 'video',
    title: 'Soaring Eagles 2024 Highlights',
    date: 'December 2024',
    thumbnail: 'https://images.unsplash.com/photo-1642307063044...',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1'
  },
  {
    type: 'image',  // No videoUrl needed for images
    title: 'Worship & Praise Session',
    date: 'November 2024',
    thumbnail: 'https://images.unsplash.com/photo-1667068114532...'
  },
  {
    type: 'image',
    title: 'Fellowship & Community',
    date: 'November 2024',
    thumbnail: 'https://images.unsplash.com/photo-1551327420...'
  },
  {
    type: 'video',
    title: 'Powerful Ministry Moments',
    date: 'October 2024',
    thumbnail: 'https://images.unsplash.com/photo-1721523362544...',
    videoUrl: 'https://youtu.be/YOUR_VIDEO_ID_2'
  },
  {
    type: 'image',
    title: 'Past Convention Memories',
    date: 'September 2024',
    thumbnail: 'https://images.unsplash.com/photo-1759419048791...'
  },
  {
    type: 'video',
    title: 'Testimonies & Miracles',
    date: 'August 2024',
    thumbnail: 'https://images.unsplash.com/photo-1625325994084...',
    videoUrl: 'https://vimeo.com/76979871'  // Vimeo example
  }
];
```

---

## 🎯 Quick Checklist

When adding a new video slide:
- [ ] `type:` is set to `'video'`
- [ ] `title:` has your video title
- [ ] `date:` has the date
- [ ] `thumbnail:` has an image URL (for the slide preview)
- [ ] `videoUrl:` has your YouTube/Vimeo/MP4 URL
- [ ] Don't forget the comma `,` at the end

---

## ⚠️ Common Mistakes

### ❌ Wrong
```typescript
{
  type: 'video',
  videoUrl: 'https://youtube.com/...'  // Missing thumbnail!
}
```

### ✅ Correct
```typescript
{
  type: 'video',
  thumbnail: 'https://images.unsplash.com/...',  // Thumbnail required!
  videoUrl: 'https://youtube.com/...'
}
```

---

## 🔧 Features Summary

| Feature | Status |
|---------|--------|
| Thumbnail images | ✅ Always displayed |
| Play button overlay | ✅ On video slides |
| Click to open popup | ✅ Video slides only |
| YouTube support | ✅ Auto-detected |
| Vimeo support | ✅ Auto-detected |
| MP4 support | ✅ Native video player |
| Autoplay | ✅ Videos start automatically |
| Close button | ✅ Top-right corner |
| Click outside to close | ✅ Anywhere on dark bg |
| Video title display | ✅ Below video |
| Mobile responsive | ✅ Fully optimized |
| Existing styling | ✅ Maintained |
| Navigation arrows | ✅ Unchanged |

---

## 🎨 User Experience

1. **User browses carousel** → Sees beautiful thumbnail images
2. **Hovers over video slide** → Play button appears
3. **Clicks video slide** → Popup opens with video
4. **Video autoplays** → Starts immediately
5. **User watches video** → Full screen experience
6. **Clicks close or outside** → Returns to carousel
7. **Image slides** → Click does nothing (as intended)

---

## 💡 Pro Tips

### Tip 1: Use Embed URLs for Best Performance
Instead of: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`  
Use: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Tip 2: Test Your Video URLs
Before deploying, click each video slide to ensure it plays correctly.

### Tip 3: Create Engaging Thumbnails
Use high-quality, relevant images for your `thumbnail:` field to attract clicks.

### Tip 4: Keep Titles Concise
Video titles display in the popup - keep them short and descriptive.

### Tip 5: Mix Videos and Images
You can have any combination of video and image slides - they work seamlessly together.

---

## 🚀 Ready to Deploy!

Your Media Gallery is now fully equipped with video playback! Simply:
1. Add your YouTube/Vimeo video URLs
2. Save the file
3. Test locally (if possible)
4. Deploy to Vercel

---

## 📞 Need Help?

If you encounter any issues:
1. Check that video URLs are correct
2. Verify videos are public (not private)
3. Make sure you haven't removed any commas
4. Ensure `type: 'video'` for video slides
5. Keep both `thumbnail` AND `videoUrl` fields

---

## 🎉 Enjoy Your New Video Gallery!

Your Soaring Eagles Convention 2025 website now has a professional, interactive media gallery that will engage your visitors and showcase your ministry's powerful moments!
