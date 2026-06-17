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
  // ── Rust ────────────────────────────────────────────────
  {
    slug: "rust-private",
    title: "Rust Private",
    description: "Setup guide for Rust Private — driver injection via RivaTuner.",
    category: "Rust",
    order: 0,
    content: `
# Rust Private

## Step 1: Disable Defender

Disable Antivirus (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option "Remove Windows Defender only":

[Download DControl](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

## Step 2: Download the Loader

[Download Loader](https://pixeldrain.com/u/PLeYidwP)

## Step 3: Install Runtimes

For communicating our software with Windows we need Visual C++. "AIO Runtimes" will install all necessary versions for you.

[Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

## Step 4: Disable Required Features

### Exploit Protections

Configure the Exploit Protections options to "Use Default":

1. Press Windows key and search "Exploit Protection"
2. Open the Exploit Protection window
3. For each option, set it to "Use Default"

### System Requirements

1. Your computer must have enough RAM to run the game with at least 2GB free.
2. Supported: Windows 10 (2004, 20H2, 22H2) and Windows 11 (21H2, 22H2, 23H2, 25H2).
3. Virtualization-based security must be disabled in your BIOS. To check: Win + R → msinfo32.
4. Kernel DMA Protection must be disabled. To check: Win + R → msinfo32.
5. Meltdown and Spectre protections must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY#isOv0y12qYguD3w3Y5hBGzPrn_zCPSFK88BZhvWSBHg).

### Disable Kernel DMA Protection

If you have disabled VT-d (Virtualization) in BIOS, Kernel DMA Protection should already be inactive. Otherwise follow the [guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

### Disable Meltdown/Spectre Protections

Run [this fix](https://mega.nz/file/hWsgxSRK#nl9R4qSt3eJ7HRzbBK3-eD3YCL9ibSng2Ggo9lizLBE) in cmd as admin and restart your PC.

## Step 5: Inject

1. Open RivaTuner as **Administrator**.
2. Enter your license key, click Login, and press **Inject**.
3. After successful injection, launch Rust — the menu will appear!

## BSOD Fix

> Only do this if you keep getting BSOD. Run disable features.bat as admin: [Download](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-lite",
    title: "Rust Lite",
    description: "Setup guide for Rust Lite with Syringe loader.",
    category: "Rust",
    order: 1,
    content: `
# Rust Lite

## Step 1: Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Step 2: Get the Loader

[https://renthal.syringe.dev/download](https://renthal.syringe.dev/download)

**MANDATORY** — complete all steps below before the first launch!

### Disabling Security Services

- **Disable Windows Defender** — download [Defender Control v2.1](https://www.sordum.org/9480/defender-control-v2-1/), run as administrator and click disable. The button should turn **red**.
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
    slug: "rust-internal-plus",
    title: "Rust Internal Plus",
    description: "Setup guide for Rust Internal Plus — USB injection method.",
    category: "Rust",
    order: 2,
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

0. Check in regedit if the branch contains a value named "(Default)" equal to the expected DLL path.

You should also check if the size of the DLL file is >= 1.5 MB.

**If any of these conditions are not met, follow these steps:**

1. Close all antivirus programs (Defender via DControl) and other software.
2. Enter "sc start trustedinstaller" in the console as administrator.
3. Enable your VPN and use it from the launcher to the cheat menu in the game.
4. You must open the game manually after waiting 15 seconds after injection. Open "Rust.exe" in the game folder as administrator.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rust-internal-pro",
    title: "Rust Internal Pro",
    description: "Setup guide for Rust Internal Pro with Syringe loader.",
    category: "Rust",
    order: 3,
    content: `
# Rust Internal Pro

## Step 1: Download Defender Control

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Step 2: Get the Loader

[https://renthal.syringe.dev/download](https://renthal.syringe.dev/download)

**MANDATORY** — complete all steps below before the first launch!

### Disabling Security Services

- **Disable Windows Defender** — download [Defender Control v2.1](https://www.sordum.org/9480/defender-control-v2-1/), run as administrator and click disable. The button should turn **red**.
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
    slug: "rust-script",
    title: "Rust Script",
    description: "Recoil script setup with auto weapon detection.",
    category: "Rust",
    order: 4,
    content: `
# Rust Script Setup

## Step 1: Download Loader

[Download Loader](https://mega.nz/file/wL03UDAD#_VVyhrTvdIJlmm7eB89Z9biOr8bKvXt4w_ZzBisE34g)

> Password is **recoil**

## Step 2: Weapon Selection

There are three ways to select weapons:

- **Auto Weapon Detection** — enabling this will disable cycling via keybinds
- **Weapon Cycling Keybind** — configure in the Settings Tab
- **Unique Keybind** — configure in the Recoil Tab

## Step 3: Best Settings

- 1920x1080 resolution
- 1.0 UI Scale

## Playing Stretched Resolution?

Follow [this video](https://www.youtube.com/watch?v=OEAn8NBG19I) and set your screen mode in-game to borderless after you do this. Then make sure your resolution on the script matches with the game.

## Auto Weapon Detection Not Working?

- Make sure you are on **borderless** (you can change your monitor resolution in Windows settings if you don't want to play on native resolution).
- If you are using skins and it isn't detected for a specific skin, let us know which skin didn't work.
- Make sure you are using your screen resolution for your game resolution.
- Make sure Rust is running on your **primary monitor**.
- Press the **"sync"** button on the script to make sure your UI scale is exactly 1:1 with the game.
- The accuracy of auto detection lowers with your UI scale.
- Make sure the resolution on your script matches with your game.

## Recoil Not Being Controlled Well?

- Make sure your FOV, Sensitivity, and ADS sensitivity on the script matches 1:1 with the game (press the "sync" button).
- Make sure the attachments on your gun are selected on the script.

## Recoil Not Controlled When Moving/Crouching?

Make sure the keys on the script match with your game's movement and crouch binds.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── FPS Games ───────────────────────────────────────────
  {
    slug: "fortnite-private",
    title: "Fortnite Private",
    description: "Setup guide for Fortnite Private — driver injection via RivaTuner.",
    category: "FPS Games",
    order: 0,
    content: `
# Fortnite Private

## Step 1: Disable Defender

Disable Antivirus (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option "Remove Windows Defender only":

[Download DControl](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

## Step 2: Download the Loader

[Download Loader](https://pixeldrain.com/u/PLeYidwP)

## Step 3: Install Runtimes

For communicating our software with Windows we need Visual C++. "AIO Runtimes" will install all necessary versions for you.

[Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

## Step 4: Disable Required Features

### Exploit Protections

Configure the Exploit Protections options to "Use Default":

1. Press Windows key and search "Exploit Protection"
2. Open the Exploit Protection window
3. For each option, set it to "Use Default"

### System Requirements

1. Your computer must have enough RAM to run the game with at least 2GB free.
2. Supported: Windows 10 (2004, 20H2, 22H2) and Windows 11 (21H2, 22H2, 23H2, 25H2).
3. Virtualization-based security must be disabled in your BIOS. To check: Win + R then msinfo32.
4. Kernel DMA Protection must be disabled. To check: Win + R then msinfo32.
5. Meltdown and Spectre protections must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY#isOv0y12qYguD3w3Y5hBGzPrn_zCPSFK88BZhvWSBHg).

### Disable Kernel DMA Protection

If you have disabled VT-d (Virtualization) in BIOS, Kernel DMA Protection should already be inactive. Otherwise follow the [guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

### Disable Meltdown/Spectre Protections

Run [this fix](https://mega.nz/file/hWsgxSRK#nl9R4qSt3eJ7HRzbBK3-eD3YCL9ibSng2Ggo9lizLBE) in cmd as admin and restart your PC.

## Step 5: Inject

1. Open RivaTuner as **Administrator**.
2. Enter your license key, click Login, and press **Inject**.
3. After successful injection, launch Fortnite — the menu will appear!

## BSOD Fix

> Only do this if you keep getting BSOD. Run disable features.bat as admin: [Download](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "fortnite-public",
    title: "Fortnite Public",
    description: "Setup guide for Fortnite Public — driver injection via RivaTuner.",
    category: "FPS Games",
    order: 1,
    content: `
# Fortnite Public

## Step 1: Disable Defender

Disable Antivirus (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option "Remove Windows Defender only":

[Download DControl](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

## Step 2: Download the Loader

[Download Loader](https://pixeldrain.com/u/PLeYidwP)

## Step 3: Install Runtimes

For communicating our software with Windows we need Visual C++. "AIO Runtimes" will install all necessary versions for you.

[Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

## Step 4: Disable Required Features

### Exploit Protections

Configure the Exploit Protections options to "Use Default":

1. Press Windows key and search "Exploit Protection"
2. Open the Exploit Protection window
3. For each option, set it to "Use Default"

### System Requirements

1. Your computer must have enough RAM to run the game with at least 2GB free.
2. Supported: Windows 10 (2004, 20H2, 22H2) and Windows 11 (21H2, 22H2, 23H2, 25H2).
3. Virtualization-based security must be disabled in your BIOS. To check: Win + R then msinfo32.
4. Kernel DMA Protection must be disabled. To check: Win + R then msinfo32.
5. Meltdown and Spectre protections must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY#isOv0y12qYguD3w3Y5hBGzPrn_zCPSFK88BZhvWSBHg).

### Disable Kernel DMA Protection

If you have disabled VT-d (Virtualization) in BIOS, Kernel DMA Protection should already be inactive. Otherwise follow the [guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

### Disable Meltdown/Spectre Protections

Run [this fix](https://mega.nz/file/hWsgxSRK#nl9R4qSt3eJ7HRzbBK3-eD3YCL9ibSng2Ggo9lizLBE) in cmd as admin and restart your PC.

## Step 5: Inject

1. Open RivaTuner as **Administrator**.
2. Enter your license key, click Login, and press **Inject**.
3. After successful injection, launch Fortnite — the menu will appear!

## BSOD Fix

> Only do this if you keep getting BSOD. Run disable features.bat as admin: [Download](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "r6-external",
    title: "R6 External",
    description: "Setup guide for Rainbow Six Siege external.",
    category: "FPS Games",
    order: 2,
    content: `
# R6 External

## Step 1: Download the Loader

[Download Loader](https://uniqueloader.com/r6s/)

## Step 2: Extract Loader

Extract the files from the archive and place them in a separate folder. The folder name should be written in English letters. It is recommended to place this folder in the root of the C drive.

## Step 3: Disable Security Features

Disable CPU Virtualization, Kernel DMA Protection, Control Flow Guard, and Windows Defender entirely using Defender Control. (Recommend TPM/SecureBoot also)

## Step 4: Download DControl

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Step 5: Inject

1. Run the cheat loader as administrator.
2. Insert your key into the "Serial Key" field and click "Sign In".
3. After a short loading, you will see the R6S icon.
4. Click the "Start Injection Process" button.
5. The message "Please Open Rainbow Six Siege" will appear — launch the game. Be sure to run the **DirectX 12** version of the game!
6. When the game starts, press the **"Insert"** key while in the main menu.
7. The cheat menu will appear. The key to close/open the menu is **Insert**.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "r6-unlock-all",
    title: "R6 Unlock All",
    description: "Rainbow Six Siege unlock all operators.",
    category: "FPS Games",
    order: 3,
    content: `
# R6 Unlock All

## Step 1: Download the Loader

[Download Loader](https://mega.nz/file/o702iTgJ#EOzhlG4hzoqlFqv10lQdvinWTdCK3TZlJCdQ_ELEBfc)

## Step 2: Disable Security Features

Disable CPU Virtualization, Kernel DMA Protection, Control Flow Guard, and Windows Defender entirely using Defender Control. (Recommend TPM/SecureBoot also)

## Step 3: Download DControl

Download Defender Control Here: [https://www.sordum.org/9480/defender-control-v2-1/](https://www.sordum.org/downloads/?st-defender-control) to fully disable Windows Defender.

> Password is **sordum**

## Step 4: Run Loader

Run loader as admin and insert key. Wait for command window to close and you will be injected.

If you encounter issues please contact support or see common errors.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "bo7",
    title: "BO7 Internal",
    description: "Black Ops 7 internal with RivaTuner injection.",
    category: "FPS Games",
    order: 4,
    content: `
# BO7 Internal

## Step 1: Disable Defender

Disable Antivirus (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option "Remove Windows Defender only":

[Download DControl](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

## Step 2: Download the Loader

[Download Loader](https://pixeldrain.com/u/PLeYidwP)

## Step 3: Install Runtimes

For communicating our software with Windows we need Visual C++. "AIO Runtimes" will install all necessary versions for you.

[Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

## Step 4: Disable Required Features

### Exploit Protections

Configure the Exploit Protections options to "Use Default":

1. Press Windows key and search "Exploit Protection"
2. Open the Exploit Protection window
3. For each option, set it to "Use Default"

### System Requirements

1. Your computer must have enough RAM to run the game with at least 2GB free.
2. Supported: Windows 10 (2004, 20H2, 22H2) and Windows 11 (21H2, 22H2, 23H2, 25H2).
3. Virtualization-based security must be disabled in your BIOS. To check: Win + R then msinfo32.
4. Kernel DMA Protection must be disabled. To check: Win + R then msinfo32.
5. Meltdown and Spectre protections must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY#isOv0y12qYguD3w3Y5hBGzPrn_zCPSFK88BZhvWSBHg).

### Disable Kernel DMA Protection

If you have disabled VT-d (Virtualization) in BIOS, Kernel DMA Protection should already be inactive. Otherwise follow the [guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

### Disable Meltdown/Spectre Protections

Run [this fix](https://mega.nz/file/hWsgxSRK#nl9R4qSt3eJ7HRzbBK3-eD3YCL9ibSng2Ggo9lizLBE) in cmd as admin and restart your PC.

## Step 5: Inject

1. Open RivaTuner as **Administrator**.
2. Enter your license key, click Login, and press **Inject**.
3. After successful injection, launch the game — the menu will appear!

## BSOD Fix

> Only do this if you keep getting BSOD. Run disable features.bat as admin: [Download](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "apex-external",
    title: "Apex External",
    description: "Setup guide for Apex Legends external — driver injection via RivaTuner.",
    category: "FPS Games",
    order: 5,
    content: `
# Apex External

## Step 1: Disable Defender

Disable Antivirus (password is sordum)

1. First permanently remove any installed antivirus software such as Norton, Avast, McAfee, Malwarebytes, Kaspersky, etc.
2. Now you need to disable Windows Defender completely, use the software below for this. Just open it as an administrator and use the option "Remove Windows Defender only":

[Download DControl](https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0)

## Step 2: Download the Loader

[Download Loader](https://pixeldrain.com/u/PLeYidwP)

## Step 3: Install Runtimes

For communicating our software with Windows we need Visual C++. "AIO Runtimes" will install all necessary versions for you.

[Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

## Step 4: Disable Required Features

### Exploit Protections

Configure the Exploit Protections options to "Use Default":

1. Press Windows key and search "Exploit Protection"
2. Open the Exploit Protection window
3. For each option, set it to "Use Default"

### System Requirements

1. Your computer must have enough RAM to run the game with at least 2GB free.
2. Supported: Windows 10 (2004, 20H2, 22H2) and Windows 11 (21H2, 22H2, 23H2, 25H2).
3. Virtualization-based security must be disabled in your BIOS. To check: Win + R then msinfo32.
4. Kernel DMA Protection must be disabled. To check: Win + R then msinfo32.
5. Meltdown and Spectre protections must be disabled. Check with [InSpectre](https://mega.nz/file/9TkG0bbY#isOv0y12qYguD3w3Y5hBGzPrn_zCPSFK88BZhvWSBHg).

### Disable Kernel DMA Protection

If you have disabled VT-d (Virtualization) in BIOS, Kernel DMA Protection should already be inactive. Otherwise follow the [guide](https://www.minitool.com/news/disable-kernel-dma-protection-on-windows-11.html).

### Disable Meltdown/Spectre Protections

Run [this fix](https://mega.nz/file/hWsgxSRK#nl9R4qSt3eJ7HRzbBK3-eD3YCL9ibSng2Ggo9lizLBE) in cmd as admin and restart your PC.

## Step 5: Inject

1. Open RivaTuner as **Administrator**.
2. Enter your license key, click Login, and press **Inject**.
3. After successful injection, launch Apex Legends — the menu will appear!

## BSOD Fix

> Only do this if you keep getting BSOD. Run disable features.bat as admin: [Download](https://gofile.io/d/J882q3)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── Other Products ──────────────────────────────────────
  {
    slug: "nfa-account",
    title: "NFA Account",
    description: "NFA account loader setup.",
    category: "Other Products",
    order: 0,
    content: `
# NFA Loader

## Step 1: Download the Loader

[Download Loader](http://loader.monster/nfa/nfa-loader-latest.exe?v=1.0.3)

## Not Working?

If the loader doesn't open and instantly crashes, your system needs Microsoft Edge WebView2. Download and setup Microsoft Edge, as the loader depends on it.

If it still doesn't work, install the **Evergreen Standalone Installer x64** from here: [WebView2 Download](https://developer.microsoft.com/en-us/microsoft-edge/webview2)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── Spoofers ────────────────────────────────────────────
  {
    slug: "beta-perm-spoofer",
    title: "BETA Perm Spoofer",
    description: "Permanent HWID spoofer for hardware bans.",
    category: "Spoofers",
    order: 0,
    content: `
# Permanent HWID Spoofer

## Step 1: Download

Showcase: [https://streamable.com/on9d88](https://streamable.com/on9d88)

[Download Loader](https://gofile.io/d/twpAOm)

## Usage Guide

### When to Use

- After being hardware-banned from a game
- When setting up a new account to avoid detection
- After changing hardware but still being flagged
- After a Windows reinstall if old HWID data remains

### Preparation

- Disable all antivirus programs, including Windows Defender and third-party tools
- Disable Secure Boot in BIOS/UEFI, save changes, and restart your PC

### Check Your Current HWID

- Run the included HWID Checker
- Save or screenshot your original HWID values for comparison

### Run the Spoofer

- Extract the spoofer files to a safe location (e.g., Desktop)
- Right-click the executable and choose "Run as Administrator"
- Follow the on-screen instructions until the process completes

### Verify the Spoof

- Restart your PC
- Run the HWID Checker again
- Compare new HWID values to confirm they have changed

## Important Notes

- Games like Fortnite, Valorant, and CS2 (FaceIT) now track TPM chips. These cannot be spoofed — you will need a new TPM chip or a different system.
- Major Windows updates or BIOS resets may revert spoofing. If this happens, run the spoofer again.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── Other Products ──────────────────────────────────────
  {
    slug: "arc-raiders",
    title: "Arc Raiders",
    description: "Arc Raiders setup via Ancient loader.",
    category: "Other Products",
    order: 1,
    content: `
# Arc Raiders

## Step 1: Download Loader

[Download Loader](https://telegra.ph/INJECTION-07-21-4)

## Extra Info

[FAQ and additional details](https://telegra.ph/ANCIENT-FAQ-EU-07-20)

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── Spoofers ────────────────────────────────────────────
  {
    slug: "temp-spoofer",
    title: "Temp Spoofer",
    description: "Temporary HWID spoofer with seeding system.",
    category: "Spoofers",
    order: 1,
    content: `
# Temporary HWID Spoofer

## Before Proceeding to Spoof

**IMPORTANT — Complete these first:**

1. **Install Runtime Files** (run .bat file as admin): [Download AIO Runtimes](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)
2. **Disable Antivirus**: [Download Defender Control](https://www.sordum.org/9480/defender-control-v2-1/)
3. **Enable Virtualization** in BIOS for HV mode!
4. **Disable Secure Boot** for EFI mode!

## How the Seeding System Works

The seed is like your profile for the spoofer. It's the code that generates a set of hardware serials for your PC. As long as you keep the same seed, you'll always have the same serial set even if you respoof. If you change the seed, the spoofer creates a completely new and unique set of serials, giving you a fresh and unique profile. After getting banned on a seed, you should change it and clean your game.

## How to Spoof

1. Download the Nordic Spoofer Loader: [Download Loader](https://pub-9489d5ac99244cdfa69f898e07af4447.r2.dev/NORDICSPOOFER.exe)
2. Sign up and create an account using the License Key provided via Website/Ticket, then restart the Loader.
3. Select the Anticheat you're planning to spoof, press **Load**.
4. Go to the "Serials" tab and compare your Old and New Serials. Pay attention as your serials are only slightly modified.
5. Start your game.

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  // ── Other Products ──────────────────────────────────────
  {
    slug: "abi-internal",
    title: "ABI Internal",
    description: "ABI internal setup with custom loader.",
    category: "Other Products",
    order: 2,
    content: `
# ABI Internal

## Step 1: Preparing Your Computer

- Download [DControl](https://mega.nz/file/N4ZwnTzI#UBIbpnRRDSp9mrEKA5RC1v2eyV410Dwj2dGr9Usb1rA) | WinRAR Password: sordum — Open DControl.exe and disable Windows Defender
- Ensure you have [Visual C++](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) Libraries and [DirectX](https://download.microsoft.com/download/1/7/1/1718ccc4-6315-4d8e-9543-8e28a4e18c4c/dxwebsetup.exe) installed. If not, please download and install them.
- Remove any antivirus software from your system.
- Make sure game resolution is **borderless**.

## Step 2: Launching the Product

> **Important:** Ensure that the Game Launcher and Game are completely closed before launching the loader.

- **Install and Run the** [**Loader**](https://gofile.io/d/ALawtb)
- **Open game once loader closes**
- **Once you're in game lobby press F2 and wait until menu appears (10–60 seconds)**
- **Button to Open and Hide menu: Insert**

## Error Fix: No Menu After Injection

If the menu does not appear after injection, please check the following:

- Make sure you press **F2** while being in the **game lobby** — you should hear a **beep sound**
- The menu may appear **after 30–60 seconds** while staying in the lobby
- Ensure your game is running in **Borderless Windowed** mode (Fullscreen is not supported)
- Make sure the following Windows protections are **disabled**: Windows SmartScreen, UAC, Windows Firewall
- Ensure **Driver Blocklist** is disabled
- Make sure you **do not have any third-party antivirus** installed
- Make sure **FACEIT Anti-Cheat is not installed** on your system

## Still Experiencing Issues?

1. Download [support.exe](https://gofile.io/d/sOW8lX)
2. Create a new folder and place support.exe inside it
3. Run support.exe
4. A file named "bundle.enc" will be generated in the same folder
5. Send the bundle.enc file to us via your support ticket on Discord

## Quick Support

Please visit [https://support.nordiccheats.net/](https://support.nordiccheats.net/) and run the support tool. Once done, just send us your Run ID in this format: **NORDIC-XXXXXXXX**.
    `,
  },
  {
    slug: "rl-ai",
    title: "RL AI",
    description: "Rocket League AI bot with Discord overlay.",
    category: "Other Products",
    order: 3,
    content: `
# RL AI

> Do NOT Enable/Disable the bot while in a match manually by clicking the switch — only do so if you have a keybind bound.

## Ban Prevention

**Important:** To reduce the risk of your account being terminated or banned by EAC, please follow these precautions:

- Do not tab out while the menu is open.
- Do not manually enable the AI bot during a match. Set up and use a hotkey in the menu instead.

## Required Dependencies

### Required Software

- **Microsoft Visual C++ Redistributables**: [Download VC++ 2015–2022 (x86 and x64)](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
- **DirectX End-User Runtime**: [Download](https://www.microsoft.com/en-us/download/details.aspx?id=35)
- **.NET Framework (if needed)**: [Download .NET Framework 4.8 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48)

### Anti-Cheat Clients

Fully close/exit software like: Vanguard (Valorant), Faceit Anti-Cheat, ESEA Client, Battleye, Easy Anti-Cheat. Check Task Manager to ensure no related processes are running.

### Disabling Antivirus

1. Download [Defender Control](https://www.sordum.org/9480/defender-control-v2-1/)
2. Extract and run as Administrator
3. Click "Disable Windows Defender" — wait for confirmation

## Setup

[Download Loader](https://gofile.io/d/mib9YV)

> Note: The first time you load the cheat or after a Discord update, Discord may automatically restart. This is completely normal.

### Discord Overlay Settings

- **Enable** Discord standard overlay
- **Disable** legacy overlay
- **Enable** toggle for Overlay and Detection for the game

## Error Codes

- **0xBAD01** — Discord installation folder not found. Locate your Discord folder (usually in AppData/Local/Discord) and send a screenshot to support.
- **0xBAD02** — Discord overlay failed to initialize. Restart your PC and try again.
- **0xBAD04** — Random initialization issue. A system restart usually fixes this.
- **0xBAD05** — Discord is running with elevated permissions (admin mode). Close Discord and reopen it without admin privileges.
- **"Failed to connect to Discord overlay"** — Make sure Discord legacy overlay is enabled in Settings > Game Overlay.

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
