import { loadOverrides } from "./storage";

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  order: number;
}

export interface DocCategory {
  name: string;
  slug: string;
  pages: DocPage[];
}

export const docs: DocPage[] = [
  // ── Rust ──────────────────────────────────────────
  {
    slug: "rust-internal-plus",
    title: "Rust Internal Plus",
    description: "Setup guide for Rust Internal Plus — USB injection method.",
    category: "Rust",
    order: 0,
    content: `
# Rust Internal Plus

The loader must be launched and the cheat must be injected from a **USB flash drive**. Once the injection is complete, you **MUST** remove the USB flash drive. **BE SURE TO DELETE THE LOADER FILE FROM YOUR PC.**

## Setup Steps

1. Launch the game and set the window mode to **"Fullscreen Windowed"** in the game settings, then close the game.
2. Download the loader from the link: [https://nordic-cheats.orion-security.pro/launcher](https://nordic-cheats.orion-security.pro/launcher) using the key you received after payment.
3. Run the downloaded file as **administrator**. In the loader window that opens, select your game, click it, and then click **"Run."**
4. Wait for the loader to close. If the injection is successful, the loader will display a check mark and close. After this, you **MUST IMMEDIATELY** launch the game.
5. After the game has fully loaded to the main menu, press the **F2** key to complete the injection, then press the **INSERT** key to open the menu, and press the **F6** key to completely unload the cheat.

## Not Working?

Visit our special page, where we have collected all known errors in the work of the loader, cheat and ways to solve them.

If the internal pro menu isn't appearing please do the following:

0. Check in regedit if the <code>Computer\\HKEY_CLASSES_ROOT\\CLSID{745057c7-f353-4f2d-a7ee-58434477730e}\\InprocServer32</code> branch contains a value named <code>(Default)</code> equal to <code>C:\\Windows\\System32\\mfwmaaec.dll</code>.

You should also check if the size of <code>C:\\Windows\\System32\\mfwmaaec.dll</code> is >= 1.5 MB.

**If any of these conditions are not met, follow these steps:**

1. Close all antivirus programs (Defender via DControl) and other software.
2. Enter <code>sc start trustedinstaller</code> in the console as administrator.
3. Enable your VPN and use it from the launcher to the cheat menu in the game.
4. You must open the game manually after waiting 15 seconds after injection. Open <code>Rust.exe</code> in the game folder as administrator.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-internal-pro",
    title: "Rust Internal Pro",
    description: "Setup guide for Rust Internal Pro with Syringe loader.",
    category: "Rust",
    order: 1,
    content: `
# Rust Internal Pro

## Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Get the Loader

[https://renthal.syringe.dev/download](https://renthal.syringe.dev/download)

**MANDATORY** — complete all steps below before the first launch!

### Disabling Security Services

- **Disable Windows Defender** — download [Defender Control v2.1](https://www.sordum.org/9480/defender-control-v2-1/), run as administrator and click disable. The button should turn red.
- **Uninstall antivirus software** — Kaspersky, Avast, Avira, ESET, etc. Use official uninstall utilities from the vendor.
- **Uninstall anti-cheats** — Faceit, Riot Vanguard and similar. Use [Revo Uninstaller](https://www.softportal.com/software-6084-revo-uninstaller.html) for complete removal.
- Make sure **HYPER V and Virtualization** are enabled.
- **Clear the Temp folder** — [Cleanup guide](https://altarena.ru/kak-ochistit-papku-temp-v-windows-10-avtomaticheski/).
- **Restart your computer** after completing all actions.

### Launch Instructions

1. Make sure you completed all steps from PC Preparation.
2. Open **Discord > Settings > Game Overlay > Enable Overlay > Disable Legacy Overlay** and **Settings > Advanced > Hardware Acceleration > Enabled**.
3. Download the loader: [Syringe Developer Portal](https://renthal.syringe.dev/download) using your key.
4. Run the file as **administrator**. Select your game and click **'Run'**.
5. Wait for the loader to close. On success — a checkmark message. A reboot prompt appears — click **'Yes'**.
6. After restart: launch the loader again as admin, select game, click **'Run'**. Wait for the loader to close. On success — a checkmark message.
7. **IMMEDIATELY** launch the game. Wait for full load to main menu.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-lite",
    title: "Rust Lite",
    description: "Setup guide for Rust Lite with Syringe loader.",
    category: "Rust",
    order: 2,
    content: `
# Rust Lite

## Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Get the Loader

[https://renthal.syringe.dev/download](https://renthal.syringe.dev/download)

**MANDATORY** — complete all steps below before the first launch!

### Disabling Security Services

- **Disable Windows Defender** — download [Defender Control v2.1](https://www.sordum.org/9480/defender-control-v2-1/), run as administrator and click disable. The button should turn red.
- **Uninstall antivirus software** — Kaspersky, Avast, Avira, ESET, etc. Use official uninstall utilities from the vendor.
- **Uninstall anti-cheats** — Faceit, Riot Vanguard and similar. Use [Revo Uninstaller](https://www.softportal.com/software-6084-revo-uninstaller.html) for complete removal.
- Make sure **HYPER V and Virtualization** are enabled.
- **Clear the Temp folder** — [Cleanup guide](https://altarena.ru/kak-ochistit-papku-temp-v-windows-10-avtomaticheski/).
- **Restart your computer** after completing all actions.

### Launch Instructions

1. Make sure you completed all steps from PC Preparation.
2. Open **Discord > Settings > Game Overlay > Enable Overlay > Disable Legacy Overlay** and **Settings > Advanced > Hardware Acceleration > Enabled**.
3. Download the loader: [Syringe Developer Portal](https://renthal.syringe.dev/download) using your key.
4. Run the file as **administrator**. Select your game and click **'Run'**.
5. Wait for the loader to close. On success — a checkmark message. A reboot prompt appears — click **'Yes'**.
6. After restart: launch the loader again as admin, select game, click **'Run'**. Wait for the loader to close. On success — a checkmark message.
7. **IMMEDIATELY** launch the game. Wait for full load to main menu.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-lite-alt",
    title: "Rust Lite (Orion)",
    description: "Alternative Rust Lite setup via Orion loader.",
    category: "Rust",
    order: 3,
    content: `
# Rust Lite (Orion)

### Loader

[https://renthal-cheats.orion-security.pro/launcher](https://renthal-cheats.orion-security.pro/launcher)

### Set Up

Follow the instructions at: [https://loader.red/instructions.html](https://loader.red/instructions.html)

### DControl

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-script-setup",
    title: "Rust Script Setup",
    description: "Setup guide for the Rust recoil script.",
    category: "Rust",
    order: 4,
    content: `
# Rust Script Setup

### Loader

Download: [https://mega.nz/file/wL03UDAD](https://mega.nz/file/wL03UDAD)

> Password is **recoil**

### How to Select Weapons

- **Auto Weapon Detection** — Enabling this will disable cycling via keybinds
- **Weapon Cycling Keybind** — Found in Settings Tab
- **Unique Keybind** — Found in Recoil Tab

### Best Settings

- 1920x1080 resolution
- 1.0 UI Scale

### Playing Stretched Res?

Follow this video ([https://youtu.be/OEAn8NBG19I](https://www.youtube.com/watch?v=OEAn8NBG19I)) and set your screen mode in-game to borderless after you do this. Then make sure your resolution on the script matches with the game.

### Auto Weapon Detection Not Working?

- Make sure you are on **borderless**. (You can change your monitor resolution in Windows settings if you don't want to play on native resolution)
- If you are using skins, and it isn't detected for that specific skin, then let us know what skin it didn't work for.
- Make sure you are using your screen resolution for your game resolution.
- Make sure Rust is running on your **primary monitor**.
- Press the **"sync"** button on the script to make sure your UI scale is exactly 1:1 with the game.
- The accuracy of auto detection lowers with your UI scale.
- Make sure the resolution on your script matches with your game.

### Recoil Not Being Controlled Well?

- Make sure your **FOV**, **Sensitivity**, and **ADS sensitivity** on the script matches 1:1 with the game. (You can press the "sync" button to make it 1:1)
- Make sure the attachments that are on your gun are selected on the script.

### Recoil Not Controlled When Moving/Crouching?

Make sure the keys on the script match with your game's movement and crouch binds.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },

  // ── FPS Games ──────────────────────────────────────
  {
    slug: "the-externals",
    title: "The Externals",
    description: "Full setup guide for External cheats with driver injection.",
    category: "FPS Games",
    order: 0,
    content: `
# The Externals

### Disable Defender

**Disable Antivirus** (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option **"Remove Windows Defender only"** (A):

Download: [Defender Removal Tool](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

### Download the Loader

[https://pixeldrain.com/u/PLeYidwP](https://pixeldrain.com/u/PLeYidwP)

### Install Runtimes

For communicating our cheats with Windows we need Visual C++. **"AIO Runtimes"** will install all necessary versions for you.

Download: [Visual C++ Redistributable AIO](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

### Disable These Features

**Exploit Protections:**
1. Press Windows key and search **"Exploit Protection"**
2. Open the Exploit Protection window
3. For each option, set it to **"Use Default"**

**Disable Protections — Requirements:**
1. Your computer must have enough RAM to run the game with at least **2GB free**.
2. Supported Windows versions: **2004, 20H2, 22H2** (Win 10) and **21H2, 22H2, 23H2, 25H2** (Win 11).
3. **Virtualization-based security** must be disabled in your BIOS. To check: press Win + R and type <code>msinfo32</code>.
4. **Kernel DMA Protection** must be disabled. To check: press Win + R and type <code>msinfo32</code>.
5. **Meltdown and Spectre protections** must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY).

**Disable Kernel DMA Protection:**
If you have disabled VT-d (Virtualization) in the BIOS, it may already be off. Otherwise, follow [this guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

**Disable Meltdown, Spectre and VBS protections:**
Download and run this in cmd, then restart: [Download](https://mega.nz/file/hWsgxSRK)

### Inject

First open [RivaTuner](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download) as Administrator. Enter your license key provided from us, Login, and Press Inject. After successful injection, launch the game and the menu will appear!

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "bo7",
    title: "BO7 Internal",
    description: "Setup guide for Black Ops 7 internal cheat.",
    category: "FPS Games",
    order: 1,
    content: `
# BO7 Internal

### Disable Defender

**Disable Antivirus** (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below. Open it as administrator and use **"Remove Windows Defender only"** (A):

Download: [Defender Removal Tool](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

### Download the Loader

[https://pixeldrain.com/u/PLeYidwP](https://pixeldrain.com/u/PLeYidwP)

### Install Runtimes

Download AIO Runtimes to install all necessary Visual C++ versions:

[Visual C++ Redistributable AIO](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

### Disable These Features

**Exploit Protections:**
1. Press Windows key and search **"Exploit Protection"**
2. Open the Exploit Protection window
3. For each option, set it to **"Use Default"**

**Disable Protections — Requirements:**
1. At least **2GB free RAM** while running the game.
2. Supported: Win 10 (2004, 20H2, 22H2) and Win 11 (21H2, 22H2, 23H2, 25H2).
3. **Virtualization-based security** disabled in BIOS. Check via <code>msinfo32</code>.
4. **Kernel DMA Protection** disabled. Check via <code>msinfo32</code>.
5. **Meltdown and Spectre** disabled. Use [InSpectre](https://mega.nz/file/9TkG0bbY).

Disable Kernel DMA: [Guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html)

Disable Meltdown/Spectre/VBS: [Download](https://mega.nz/file/hWsgxSRK) and run in cmd, then restart.

### Inject

Open [RivaTuner](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download) as Administrator. Enter your license key, Login, and Press Inject. After successful injection, launch the game and the menu will appear!

### ONLY DO THIS IF YOU KEEP BSODING

ONLY RUN **disable features.bat** as admin: [https://gofile.io/d/J882q3](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "bo6-warzone",
    title: "BO6 / Warzone",
    description: "Setup guide for Black Ops 6 and Warzone cheat.",
    category: "FPS Games",
    order: 2,
    content: `
# BO6 / Warzone

### Loader

[https://gofile.io/d/uuAlYe](https://gofile.io/d/uuAlYe)

### Disable

Disable **CPU Virtualization**, **Kernel DMA Protection**, **Control Flow Guard**, and **Windows Defender** entirely using Defender Control. (Recommend TPM/SecureBoot also)

### DControl

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

### Load Fix

- Make sure you run the **latest version**
- Make sure to **run product as administrator** — if not, loader will crash instantly
- If error message appears, click OK and relaunch tool as admin and wait for it to load

### No Menu?

Make sure you hear a beep once the game has launched. Make sure all antivirus are disabled. If you hear a beep but don't see the menu in-game, please ensure that **'Frame Gen'** is turned off in your game settings. Once turned off, the menu will appear.

### Still Not Working?

Run **allfix.bat** file if everything else above is done but still didn't work:

Download: [https://mega.nz/file/p2YXgAjJ](https://mega.nz/file/p2YXgAjJ)

Also run this if you're having errors: [https://aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "r6-external",
    title: "R6 External",
    description: "Setup guide for Rainbow Six Siege external cheat.",
    category: "FPS Games",
    order: 3,
    content: `
# R6 External

### Loader

[https://uniqueloader.com/r6s/](https://uniqueloader.com/r6s/)

### Extract Loader

Extract the files from the archive and place them in a separate folder. The folder name should be written in English letters — it is recommended to place this folder in the **root of the C drive**.

### Disable

Disable **CPU Virtualization**, **Kernel DMA Protection**, **Control Flow Guard**, and **Windows Defender** entirely using Defender Control. (Recommend TPM/SecureBoot also)

### Download DControl

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

### Inject

1. Run the cheat loader as **administrator**.
2. Insert your key into the **"Serial Key"** field and click **"Sign In"**.
3. After a short loading, you will see the R6S icon.
4. Click the **"Start Injection Process"** button.
5. The message **"Please Open Rainbow Six Siege"** will appear — it's time to launch the game. Be sure to run the **DirectX 12** version of the game!
6. When the game starts, press the **Insert** key while in the main menu.
7. The cheat menu will appear. The key to close/open the menu is **Insert**.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "r6-unlock-all",
    title: "R6 Unlock All",
    description: "Setup guide for Rainbow Six Siege Unlock All.",
    category: "FPS Games",
    order: 4,
    content: `
# R6 Unlock All

### Download the Loader

[https://mega.nz/file/o702iTgJ](https://mega.nz/file/o702iTgJ)

### Disable

Disable **CPU Virtualization**, **Kernel DMA Protection**, **Control Flow Guard**, and **Windows Defender** entirely using Defender Control. (Recommend TPM/SecureBoot also)

### DControl Download + Run

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

### Run

Run loader as admin and insert key. Wait for command window to close and you will be injected. If you encounter issues please contact support or see common errors.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "arc-raiders",
    title: "Arc Raiders (Syringe)",
    description: "Setup guide for Arc Raiders via Syringe loader.",
    category: "FPS Games",
    order: 5,
    content: `
# Arc Raiders (Syringe)

## Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Get the Loader

[https://renthal.syringe.dev/download](https://renthal.syringe.dev/download)

**MANDATORY** — complete all steps below before the first launch!

### Disabling Security Services

- **Disable Windows Defender** — download [Defender Control v2.1](https://www.sordum.org/9480/defender-control-v2-1/), run as administrator and click disable.
- **Uninstall antivirus software** — Kaspersky, Avast, Avira, ESET, etc.
- **Uninstall anti-cheats** — Faceit, Riot Vanguard and similar. Use [Revo Uninstaller](https://www.softportal.com/software-6084-revo-uninstaller.html).
- **Clear the Temp folder** — [Cleanup guide](https://altarena.ru/kak-ochistit-papku-temp-v-windows-10-avtomaticheski/).
- **Restart your computer** after completing all actions.

### Launch Instructions

1. Launch the game, set window mode to **'Fullscreen Windowed'** in settings, then close the game.
2. Download the loader: [Syringe Developer Portal](https://renthal.syringe.dev/download) using your key.
3. Run the file as **administrator**. Select your game and click **'Run'**.
4. Wait for the loader to close. On success — a checkmark message. A reboot prompt appears — click **'Yes'**.
5. After restart: launch the loader again as admin, select game, click **'Run'**.
6. **IMMEDIATELY** launch the game. Wait for full load to main menu.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "arc-raiders-alt",
    title: "Arc Raiders (Ancient)",
    description: "Alternative Arc Raiders setup via Ancient loader.",
    category: "FPS Games",
    order: 6,
    content: `
# Arc Raiders (Ancient)

### Loader

Injection guide: [https://telegra.ph/INJECTION-07-21-4](https://telegra.ph/INJECTION-07-21-4)

### Extra Info

FAQ and additional info: [https://telegra.ph/ANCIENT-FAQ-EU-07-20](https://telegra.ph/ANCIENT-FAQ-EU-07-20)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },

  // ── Other Products ────────────────────────────────
  {
    slug: "abi-internal",
    title: "ABI Internal",
    description: "Setup guide for ABI Internal cheat.",
    category: "Other Products",
    order: 0,
    content: `
# ABI Internal

### Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

### Get the Loader

[https://nordic-cheats.orion-security.pro/launcher](https://nordic-cheats.orion-security.pro/launcher)

### Video Guide

Watch the full setup walkthrough: [https://streamable.com/h7yhpc](https://streamable.com/h7yhpc)

### No Menu?

1. Check in regedit if the <code>Computer\\HKEY_CLASSES_ROOT\\CLSID{745057c7-f353-4f2d-a7ee-58434477730e}\\InprocServer32</code> branch contains a value named <code>(Default)</code> equal to <code>C:\\Windows\\System32\\mfwmaaec.dll</code>.

You should also check if the size of <code>C:\\Windows\\System32\\mfwmaaec.dll</code> is >= 1.5 MB.

### If Any of These Conditions Are Not Met:

1. Close all antivirus programs (Defender via DControl) and other software.
2. Enter <code>sc start trustedinstaller</code> in the console as administrator.
3. Enable your VPN and use it from the launcher to the cheat menu in the game.
4. You must open the game manually after waiting 15 seconds after injection. Open <code>Rust.exe</code> in the game folder as administrator.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rl-ai",
    title: "RL AI",
    description: "Setup guide for Rocket League AI bot with Discord overlay.",
    category: "Other Products",
    order: 1,
    content: `
# RL AI

> **Do NOT Enable/Disable the bot while in a match manually by clicking the switch — only do so if you have a keybind bound.**

## Required Dependencies

**Required Software:**

- **Microsoft Visual C++ Redistributables** — Download and install: [VC++ 2015-2022 (x86 and x64)](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
- **DirectX End-User Runtime** — Download: [DirectX Web Installer](https://www.microsoft.com/en-us/download/details.aspx?id=35)
- **.NET Framework** (if needed) — Download: [.NET Framework 4.8 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48)

**Anti-Cheat Clients — Fully close/exit:**
- Vanguard (Valorant)
- Faceit Anti-Cheat
- ESEA Client
- BattlEye
- Easy Anti-Cheat

Check Task Manager to ensure no related processes are running.

**Disable Antivirus:**
1. Download [Defender Control](https://www.sordum.org/9480/defender-control-v2-1/) (Official site)
2. Right-click <code>DefenderControl.exe</code> then Run as administrator
3. Click **"Disable Windows Defender"** — wait for confirmation

## Setup

Download Loader: [https://gofile.io/d/TL6SOL](https://gofile.io/d/TL6SOL)

> The first time you load the cheat or after a Discord update, it will restart Discord. This is **completely normal**.

### Discord Overlay Settings

- **Enable** Discord standard overlay
- **Disable** legacy overlay
- **Enable** toggle for Overlay and Detection for Rust

Then ensure none of the flagged icons are red.

**Discord Restart on First Load** — The cheat injects into Discord's overlay system. On first-time setup or after updates, a quick restart is needed. This is completely normal — just let Discord restart and proceed as usual.

## Error Codes

**0xBAD01** — Discord installation folder not found. Navigate to <code>C:\\Users\\YourName\\AppData\\Local\\Discord</code> and send a screenshot to support.

**0xBAD02** — Discord overlay failed to initialize. Restart your PC and try again.

**0xBAD04** — Random initialization issue. A system restart should fix this.

**0xBAD05** — Discord is running with elevated permissions (admin mode). Close Discord, reopen without admin privileges.

**"Failed to connect to Discord overlay..."** — Make sure Discord legacy overlay is enabled. Go to Discord Settings > Game Overlay > Enable "Legacy Overlay".

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "nfa-loader",
    title: "NFA Loader",
    description: "Setup guide for the NFA account loader.",
    category: "Other Products",
    order: 2,
    content: `
# NFA Loader

### Loader

[http://loader.monster/nfa/nfa-loader-latest.exe?v=1.0.3](http://loader.monster/nfa/nfa-loader-latest.exe?v=1.0.3)

### Not Working?

If the loader doesn't open and instantly crashes, your customers need to download and setup **Microsoft Edge**. The loader is built on it.

If it still doesn't work, setup **Evergreen Standalone Installer x64** from here:

[https://developer.microsoft.com/en-us/microsoft-edge/webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2?form=MA13LH)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },

  // ── Spoofers ──────────────────────────────────────
  {
    slug: "beta-hwid-spoofer",
    title: "BETA HWID Spoofer",
    description: "Full guide for the BETA HWID Spoofer — setup, spoofing, BSOD fixes, and support.",
    category: "Spoofers",
    order: 0,
    content: `
# BETA HWID Spoofer — Guide and Support

## Loader Download

[https://gofile.io/d/TL6SOL](https://gofile.io/d/TL6SOL)

## Important Requirements

Before spoofing, make sure you complete **ALL** of the following steps:

- **Install Runtime Files** — Install Visual C++ Redistributables and .NET Framework.
- **Disable Antivirus / Real-Time Protection** — Use Defender Control to fully disable Windows Defender.
- **Enable Virtualization in BIOS (HV Mode)** — Required for the spoofer driver.
- **Disable Secure Boot (EFI Mode)** — Must be off in BIOS/UEFI settings.

## System Cleaning (Required)

Before spoofing, you **MUST** clean your system from traces.

1. Open the loader.
2. Press the **Clean** button.
3. Wait for the cleaning process to finish.

> Even if your Windows installation is fresh, this step is still required. Cleaning does NOT only remove files — it also spoofs and resets certain usermode identifiers tied to your operating system.

## How to Spoof

1. Download and open the loader.
2. Create an account using the license key provided via the website or support ticket.
3. Restart the loader after account creation.
4. Select the anti-cheat you want to spoof for and press **Load**.
5. Go to the **Serials** tab and compare your old/new serials. Serial changes may only be slightly modified.
6. Press the **Spoof** button and wait. The first time, you may be prompted to restart for dependencies.
7. After spoofing is complete, verify serial changes using an **HWID Checker**.
8. **Close the spoofer BEFORE launching your game.**

## Important Notes

- **Avoid Cleaning Every Time** — Only clean when necessary.
- **Keep The Same Seed** — Don't change your seed between sessions.
- **Temporary Spoofer** — This is a temp spoofer; changes revert on restart.
- **Always Close The Spoofer Before Launching Games.**

## BSOD / Crash Fix Guide

If you are getting Blue Screens (BSODs), follow ALL steps below:

1. **Update Drivers** — Update all system drivers.
2. **Disable TPM** — Turn off TPM in BIOS.
3. **Disable Fast Startup** — In BIOS settings.
4. **Uninstall ALL VPN Clients** — Remove every VPN.
5. **Run Repair Commands** — Run SFC and DISM in admin cmd.
6. **Restart Your PC.**

## How to Find DMP Files

1. Open File Explorer.
2. Navigate to <code>C:\\Windows\\Minidump</code>.
3. Sort by date.
4. Find the newest **.dmp** file.
5. Send it to support.

## Got Banned?

There is **ALWAYS** risk involved. Nothing is permanently undetected.

**Common Reasons For Bans:**
- Not cleaning before spoofing
- Reusing old seeds
- Playing on flagged accounts

## Changelog — 05/14/2026

**Fixed:**
- LD-303 (0xC0000023)
- BSOD 0x50
- BSOD 0x133
- BSOD 0x1A_4477
- BSOD 0xA (Cheat Compatibility)

If you are still getting BSODs, go to <code>C:\\Windows\\Minidump</code> and send the newest file by date to support.

> **Loader re-download recommended** after each update.

## Quick Support

Visit: [https://support.nordiccheats.net/](https://support.nordiccheats.net/) — Run the support tool and send your Run ID: **NORDIC-XXXXXXXX**

**Support Notice:** Messages like "I got banned", "Can I ask something?", or "Help" will likely be ignored. Please provide **complete information** in **one message**.

**Privacy Reminder:** Do NOT post passwords, payment information, or personal details. Staff will request sensitive info privately if needed.
    `,
  },
  {
    slug: "perm-spoofer",
    title: "Perm Spoofer",
    description: "Permanent HWID Spoofer setup and usage guide.",
    category: "Spoofers",
    order: 1,
    content: `
# Permanent HWID Spoofer

### Loader

- Showcase: [https://streamable.com/on9d88](https://streamable.com/on9d88)
- Loader: [https://limewire.com/d/koyM3](https://limewire.com/d/koyM3)

## Usage Guide

### When to Use

- After being hardware-banned from a game
- When setting up a new account to avoid detection
- After changing hardware but still being flagged
- After a Windows reinstall if old HWID data remains

### Preparation

- Disable all antivirus programs, including **Windows Defender** and third-party tools
- Disable **Secure Boot** in BIOS/UEFI, save changes, and restart your PC

### Check Your Current HWID

- Run the included **HWID Checker**
- Save or screenshot your original HWID values for comparison

### Run the Spoofer

- Extract the spoofer files to a safe location (e.g., Desktop)
- Right-click the executable and choose **"Run as Administrator"**
- Follow the on-screen instructions until the process completes

### Verify the Spoof

- **Restart your PC**
- Run the HWID Checker again
- Compare new HWID values to confirm they have changed

## Important Notes

- Games like **Fortnite**, **Valorant**, and **CS2 (FaceIT)** now track TPM chips. These **cannot** be spoofed — you will need a new TPM chip or a different system.
- Major **Windows updates** or **BIOS resets** may revert spoofing. If this happens, run the spoofer again.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
];

async function getMergedDocs(): Promise<DocPage[]> {
  const overrides = await loadOverrides();
  return docs.map((doc) => {
    const override = overrides[doc.slug];
    if (!override) return doc;
    return { ...doc, ...override };
  });
}

export async function getDocBySlug(slug: string): Promise<DocPage | undefined> {
  const merged = await getMergedDocs();
  return merged.find((doc) => doc.slug === slug);
}

export async function getDocsByCategory(): Promise<DocCategory[]> {
  const categories = new Map<string, DocPage[]>();
  const merged = await getMergedDocs();

  merged.forEach((doc) => {
    const existing = categories.get(doc.category) || [];
    existing.push(doc);
    categories.set(doc.category, existing);
  });

  return Array.from(categories.entries()).map(([name, pages]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    pages: pages.sort((a, b) => a.order - b.order),
  }));
}

export function getAllSlugs(): string[] {
  return docs.map((doc) => doc.slug);
}

export async function getAllDocs(): Promise<DocPage[]> {
  return getMergedDocs();
}
