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

![Main Interface](./2025-06-22_11-55.png)

---

### 📂 File Hash Generation
After selecting a file, the app shows its metadata and generates the corresponding hash based on the selected algorithm.

![Hash from file](./2025-06-22_11-57.png)

---

### ✅ Hash Match
If the external hash matches the generated one, the application displays a green confirmation message:
**“Los hashes coinciden.”**

![Hash match](./2025-06-22_11-58.png)

---

### ❌ Hash Mismatch
If the external hash does not match, a red error message is shown:
**“Los hashes no coinciden.”**

![Hash mismatch](./2025-06-22_11-58_1.png)

---

### 🔐 SHA-256 Hash Example
In this case, a file named `cifrado.txt` is selected, and a SHA-256 hash is generated.

![SHA256 file hash](./2025-06-22_11-59.png)

---

### 🧾 SHA-256 Verification Success
After inputting the correct SHA-256 hash manually, the application verifies it successfully.

![SHA256 match](./2025-06-22_11-59_1.png)

---

## ⚙️ Technologies

- ElectronJS

## 📦 Installation

Download the latest `.deb` package from the [Releases](https://github.com/yourusername/integritycheck/releases) section and install it with:

```bash
sudo dpkg -i integritycheck_x.x.x_all.deb
