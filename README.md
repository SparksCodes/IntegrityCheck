# 🛡️ IntegrityCheck

**IntegrityCheck** is a simple forensic tool with a graphical interface for verifying the integrity of files and texts using hash algorithms.

## 🔍 Features

- Supports **MD5**, **SHA-1**, **SHA-256**, and **SHA-512**
- Generate a hash from:
  - A manually entered text
  - A selected file
- Compare generated hash with an external one
- Displays file metadata (name, size, type)
- Alerts when hashes match or mismatch

## 📸 Screenshots and Usage

### 🖥️ Main Interface
The main window allows you to choose the hashing algorithm, select a file or enter custom text, and then generate or verify its hash.

![2025-06-22_11-55](https://github.com/user-attachments/assets/d0682e43-5a40-42da-a535-d5c5a75c24fd)

---

### 📂 File Hash Generation
After selecting a file, the app shows its metadata and generates the corresponding hash based on the selected algorithm.

![2025-06-22_11-57](https://github.com/user-attachments/assets/ea0e0108-465a-43c3-b40e-386c79f6e886)

---

### ✅ Hash Match
If the external hash matches the generated one, the application displays a green confirmation message:
**“Los hashes coinciden.”**

![2025-06-22_11-58](https://github.com/user-attachments/assets/e3a60b5c-6a2e-414a-83a8-9fbd0b5fcf23)

---

### ❌ Hash Mismatch
If the external hash does not match, a red error message is shown:
**“Los hashes no coinciden.”**

![2025-06-22_11-58_1](https://github.com/user-attachments/assets/796a3f62-a19c-459b-9104-a33793ef6db9)

---

### 🔐 SHA-256 Hash Example
In this case, a file named `cifrado.txt` is selected, and a SHA-256 hash is generated.

![2025-06-22_11-59](https://github.com/user-attachments/assets/24476bf0-c22a-4d7d-a740-9e4fe3223190)

---

### 🧾 SHA-256 Verification Success
After inputting the correct SHA-256 hash manually, the application verifies it successfully.

![2025-06-22_11-59_1](https://github.com/user-attachments/assets/eb1fb951-6769-401d-80ee-76fa0915301c)

---

## ⚙️ Technologies

- ElectronJS

## 📦 Installation

Download the latest `.deb` package from the [Releases](https://github.com/SparksCodes/IntegrityCheck/releases/tag/v1.0.0) section and install it with:

```bash
sudo dpkg -i integritycheck_x.x.x_all.deb
```

## 🧰 Development Setup (Node.js & Electron)

If you cloned this repository (instead of using the `.deb` package), you need to install the dependencies first:

```bash
npm install
```

Then start the application with:

```bash
npm start
```

> Make sure you have **Node.js** (v14 or higher) and **npm** installed on your system.
