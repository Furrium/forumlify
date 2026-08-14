#!/bin/bash
# ============================================================
#  Forumlify Management Tool
#  Install · Update · Uninstall · Status
#  Supports LITE / NEXT versions
# ============================================================

set -Eeuo pipefail

# 让 echo -e 在所有环境下都生效
shopt -s expand_aliases
alias echo='echo -e'

# Run from the directory containing the installation instead of relying on the
# caller's current directory. FORUMLIFY_HOME is useful for scripted installs.
INSTALL_ROOT="${FORUMLIFY_HOME:-$PWD}"
DOCKER_NEEDS_SUDO=false
DOCKER_AVAILABLE=false
NODE_AVAILABLE=false
NODE_RUNTIME_DIR="$INSTALL_ROOT/.forumlify-runtime/node"
NPM_GLOBAL_DIR="$INSTALL_ROOT/.forumlify-runtime/npm-global"
PATH="$NODE_RUNTIME_DIR/bin:$NPM_GLOBAL_DIR/bin:$PATH"
npm_config_prefix="$NPM_GLOBAL_DIR"
export PATH npm_config_prefix
cd "$INSTALL_ROOT"

SOURCE_DATABASE_COMPOSE=".forumlify-db-compose.yml"

# ============================================================
#  颜色（ANSI 兼容）
# ============================================================

RESET='\033[0m'
BOLD='\033[1m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'

# ============================================================
#  语言选择
# ============================================================

if [ -t 1 ] && command -v clear >/dev/null 2>&1; then
    clear
fi
echo ""
echo "  ${BOLD}Forumlify Management Tool${RESET}"
echo "  ${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
echo "  Select language / 选择语言:"
echo ""
echo "    [1] English"
echo "    [2] 中文"
echo ""
echo -n "  ${BOLD}Enter number / 请输入数字:${RESET} "
read -r lang_choice

case $lang_choice in
    2) LANG="zh" ;;
    *) LANG="en" ;;
esac

# ============================================================
#  多语言字符串
# ============================================================

if [ "$LANG" = "zh" ]; then
    TITLE="Forumlify 管理工具"
    SEPARATOR="━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    SELECT_ACTION="请选择操作:"
    INSTALL_ACTION="[1] 安装 Forumlify"
    UPDATE_ACTION="[2] 更新 Forumlify"
    UNINSTALL_ACTION="[3] 卸载 Forumlify"
    STATUS_ACTION="[4] 查看状态"
    DISABLE_AUTO_UPDATE_ACTION="[5] 关闭自动更新"
    EXIT_ACTION="[0] 退出"
    ENTER_ACTION="请输入数字 (0-5):"
    INVALID_CHOICE="无效选择"
    SELECT_VERSION="请选择安装方式:"
    LITE_DESC="LITE 版  — 轻量快速，512MB 内存足够 (Express + Vanilla JS)"
    NEXT_DESC="NEXT 版  — 现代全栈，云原生就绪 (Next.js 16 + React 19)"
    LITE_DOCKER_DESC="LITE 版 — 使用 GHCR Docker 镜像"
    LITE_SOURCE_DESC="LITE 版 — 本机源码安装并运行"
    NEXT_DOCKER_DESC="NEXT 版 — 使用 GHCR Docker 镜像"
    NEXT_SOURCE_DESC="NEXT 版 — 本机源码安装并运行"
    ENTER_VERSION="请输入数字 (1-4):"
    DOWNLOADING="正在下载"
    INSTALLING="正在安装"
    STARTING="正在启动"
    COMPLETE="安装完成"
    URL_INFO="访问地址: http://localhost:3000"
    ADMIN_INFO="第一个注册的用户自动成为管理员"
    STOP_CMD="停止服务: docker compose down 或 docker-compose down"
    LOGS_CMD="查看日志: docker compose logs -f 或 docker-compose logs -f"
    DIR_EXISTS="目录 forumlify 已存在"
    OVERWRITE="是否覆盖？(y/N)"
    CANCELLED="已取消"
    CLONING="正在克隆"
    NOT_FOUND="未找到 Forumlify 安装，请先执行安装"
    UPDATE_NEXT="正在更新 NEXT 版（拉取镜像）..."
    UPDATE_LITE="正在更新 LITE 版（拉取镜像）..."
    UPDATE_DONE="更新完成"
    UNINSTALL_CONFIRM="即将完全卸载 Forumlify"
    UNINSTALL_DELETE="将删除以下内容:"
    UNINSTALL_CONTAINERS="  - 所有容器"
    UNINSTALL_VOLUMES="  - 所有数据卷（数据库 + 上传文件）"
    UNINSTALL_IMAGES="  - 所有 Forumlify 相关镜像"
    UNINSTALL_SOURCE="  - 源码目录"
    CONFIRM_UNINSTALL="确认卸载？(y/N)"
    STOPPING="正在停止并删除容器..."
    REMOVING_IMAGES="正在删除镜像..."
    REMOVING_SOURCE="正在删除源码..."
    UNINSTALL_DONE="卸载完成"
    PRUNE_HINT="清理 Docker 系统残留（可选）:"
    PRUNE_CMD="  docker system prune -f"
    NOT_INSTALLED="Forumlify 未安装"
    STATUS_TITLE="Forumlify 状态"
    VERSION_LABEL="版本:"
    VERSION_LITE="LITE（镜像驱动）"
    VERSION_NEXT="NEXT（镜像驱动）"
    VERSION_UNKNOWN="未知"
    CONTAINER_STATUS="容器状态:"
    NOT_RUNNING="未运行"
    IMAGE_INFO="镜像信息:"
    NO_IMAGE="未找到镜像"
    SOURCE_BRANCH="源码分支:"
    LAST_COMMIT="最后提交:"
    UNKNOWN="未知"
    PRESS_ENTER="按 Enter 键继续..."
    GOODBYE="再见"
    DOCKER_MISSING="未检测到 Docker"
    INSTALL_DOCKER_PROMPT="是否从 Docker 官方来源下载安装？(y/N)"
    INSTALLING_DOCKER="正在安装 Docker..."
    DOCKER_INSTALL_FAILED="Docker 安装失败"
    DOCKER_INSTALLED="Docker 已安装"
    MAC_DOCKER_DOWNLOADING="正在下载适用于当前 Mac 的 Docker Desktop..."
    MAC_DOCKER_OPENED="Docker Desktop 安装镜像已打开；请完成安装并启动 Docker，然后重新运行本脚本"
    UNSUPPORTED_OS="当前操作系统不支持自动安装 Docker"
    DOWNLOADER_MISSING="需要 curl 或 wget 才能下载 Docker"
    SUDO_REQUIRED="安装 Docker 需要 root 权限或 sudo"
    UNSUPPORTED_MAC_ARCH="不支持的 Mac CPU 架构"
    DOCKER_DAEMON_UNAVAILABLE="Docker 服务尚未运行或当前用户无权访问；请启动 Docker 后重试"
    NODE_PREPARING="正在准备 Node.js 22 或更高版本..."
    SOURCE_PREPARING="正在安装依赖并构建源码..."
    AUTO_UPDATE_DOCKER_PROMPT="是否开启每 19 分钟自动更新？(Y/n)"
    AUTO_UPDATE_SOURCE_PROMPT="是否开启每 19 分钟自动更新？(y/N)"
    AUTO_UPDATE_ENABLED="自动更新已开启"
    AUTO_UPDATE_DISABLED="自动更新已关闭"
    AUTO_UPDATE_NOT_CONFIGURED="未配置自动更新"
    AUTO_UPDATE_STATUS="自动更新:"
    DEPLOY_MODE_LABEL="部署方式:"
    DEPLOY_MODE_DOCKER="Docker 镜像"
    DEPLOY_MODE_SOURCE="源码构建"
    CRONTAB_MISSING="未找到 crontab，无法开启自动更新"
    NODE_PLATFORM_UNSUPPORTED="当前平台没有可用的 Node.js 22 官方构建"
    NODE_CHECKSUM_FAILED="Node.js 下载文件校验失败"
    CHECKSUM_TOOL_MISSING="需要 sha256sum 或 shasum 才能验证 Node.js 下载文件"
    RUNTIME_REQUIRED="没有可用的 Docker 或 Node.js，请选择一种运行环境"
    RUNTIME_CHOICE="请选择要安装的运行环境:"
    RUNTIME_DOCKER="[1] 安装 Docker"
    RUNTIME_NODE="[2] 安装 Node.js 22+"
    RUNTIME_CANCEL="[0] 取消"
    NODE_REQUIRED="源码安装需要 Node.js 22 或更高版本"
    DOCKER_ONLY_HINT="当前没有 Node.js，仅显示 Docker 安装方式"
    SOURCE_ONLY_HINT="当前没有可用的 Docker，仅显示源码安装方式"
    SOURCE_STOP_CMD="停止源码服务: ./forumlify/.forumlify-stop.sh"
    SOURCE_LOG_CMD="查看源码日志: tail -f ./forumlify/.forumlify.log"
    DATABASE_REQUIRED="源码模式需要 PostgreSQL，当前未检测到可用数据库"
    DATABASE_CHOICE="请选择 PostgreSQL 安装方式:"
    DATABASE_DOCKER="使用 Docker PostgreSQL"
    DATABASE_SOURCE="安装本机 PostgreSQL"
    DATABASE_REMOTE="使用自定义/远程 PostgreSQL"
    DATABASE_HOST_PROMPT="数据库主机/IP:"
    DATABASE_PORT_PROMPT="数据库端口 (默认 5432):"
    DATABASE_NAME_PROMPT="数据库名 (默认 forumlify):"
    DATABASE_USER_PROMPT="数据库用户 (默认 forumlify):"
    DATABASE_PASSWORD_PROMPT="数据库密码:"
    DATABASE_SSL_PROMPT="SSL 模式 (远程默认 require，本机默认 disable):"
    DATABASE_PASSWORD_EMPTY="数据库密码不能为空"
    DATABASE_CONNECTION_FAILED="无法连接到 PostgreSQL，请检查连接信息和网络"
    DATABASE_SCHEMA_FAILED="无法初始化数据库结构，请确认该用户拥有建表和修改结构的权限"
    DATABASE_INSTALLING="正在安装 PostgreSQL..."
    DATABASE_UNAVAILABLE="PostgreSQL 安装或启动失败，请检查日志后重试"
    DATABASE_READY="PostgreSQL 已就绪"
else
    TITLE="Forumlify Management Tool"
    SEPARATOR="━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    SELECT_ACTION="Select an action:"
    INSTALL_ACTION="[1] Install Forumlify"
    UPDATE_ACTION="[2] Update Forumlify"
    UNINSTALL_ACTION="[3] Uninstall Forumlify"
    STATUS_ACTION="[4] Show status"
    DISABLE_AUTO_UPDATE_ACTION="[5] Disable automatic updates"
    EXIT_ACTION="[0] Exit"
    ENTER_ACTION="Enter number (0-5):"
    INVALID_CHOICE="Invalid choice"
    SELECT_VERSION="Please select an installation method:"
    LITE_DESC="LITE  — Lightweight, fast, 512MB RAM enough (Express + Vanilla JS)"
    NEXT_DESC="NEXT  — Modern, full-stack, cloud-native ready (Next.js 16 + React 19)"
    LITE_DOCKER_DESC="LITE — Use the GHCR Docker image"
    LITE_SOURCE_DESC="LITE — Install and run from source on this machine"
    NEXT_DOCKER_DESC="NEXT — Use the GHCR Docker image"
    NEXT_SOURCE_DESC="NEXT — Install and run from source on this machine"
    ENTER_VERSION="Enter number (1-4):"
    DOWNLOADING="Downloading"
    INSTALLING="Installing"
    STARTING="Starting"
    COMPLETE="Installation complete"
    URL_INFO="URL: http://localhost:3000"
    ADMIN_INFO="First registered user becomes admin automatically"
    STOP_CMD="Stop: docker compose down or docker-compose down"
    LOGS_CMD="Logs: docker compose logs -f or docker-compose logs -f"
    DIR_EXISTS="Directory 'forumlify' already exists"
    OVERWRITE="Overwrite? (y/N)"
    CANCELLED="Cancelled"
    CLONING="Cloning"
    NOT_FOUND="Forumlify not found. Please install it first."
    UPDATE_NEXT="Updating NEXT (pulling latest image)..."
    UPDATE_LITE="Updating LITE (pulling latest image)..."
    UPDATE_DONE="Update complete"
    UNINSTALL_CONFIRM="This will completely remove Forumlify"
    UNINSTALL_DELETE="This will delete:"
    UNINSTALL_CONTAINERS="  - All containers"
    UNINSTALL_VOLUMES="  - All volumes (database + uploads)"
    UNINSTALL_IMAGES="  - All Forumlify-related images"
    UNINSTALL_SOURCE="  - Source code directory"
    CONFIRM_UNINSTALL="Are you sure? (y/N)"
    STOPPING="Stopping and removing containers..."
    REMOVING_IMAGES="Removing images..."
    REMOVING_SOURCE="Removing source code..."
    UNINSTALL_DONE="Uninstall complete"
    PRUNE_HINT="To clean up Docker system leftovers (optional):"
    PRUNE_CMD="  docker system prune -f"
    NOT_INSTALLED="Forumlify is not installed"
    STATUS_TITLE="Forumlify Status"
    VERSION_LABEL="Version:"
    VERSION_LITE="LITE (image-driven)"
    VERSION_NEXT="NEXT (image-driven)"
    VERSION_UNKNOWN="unknown"
    CONTAINER_STATUS="Container status:"
    NOT_RUNNING="Not running"
    IMAGE_INFO="Image info:"
    NO_IMAGE="No image found"
    SOURCE_BRANCH="Source branch:"
    LAST_COMMIT="Last commit:"
    UNKNOWN="unknown"
    PRESS_ENTER="Press Enter to continue..."
    GOODBYE="Goodbye"
    DOCKER_MISSING="Docker was not found"
    INSTALL_DOCKER_PROMPT="Download and install it from Docker's official source? (y/N)"
    INSTALLING_DOCKER="Installing Docker..."
    DOCKER_INSTALL_FAILED="Docker installation failed"
    DOCKER_INSTALLED="Docker is installed"
    MAC_DOCKER_DOWNLOADING="Downloading Docker Desktop for this Mac..."
    MAC_DOCKER_OPENED="The Docker Desktop disk image is open; finish installation, start Docker, then run this script again"
    UNSUPPORTED_OS="Automatic Docker installation is not supported on this operating system"
    DOWNLOADER_MISSING="curl or wget is required to download Docker"
    SUDO_REQUIRED="root access or sudo is required to install Docker"
    UNSUPPORTED_MAC_ARCH="Unsupported Mac CPU architecture"
    DOCKER_DAEMON_UNAVAILABLE="The Docker daemon is not running or cannot be accessed; start Docker and try again"
    NODE_PREPARING="Preparing Node.js 22 or newer..."
    SOURCE_PREPARING="Installing dependencies and building the source..."
    AUTO_UPDATE_DOCKER_PROMPT="Enable automatic updates every 19 minutes? (Y/n)"
    AUTO_UPDATE_SOURCE_PROMPT="Enable automatic updates every 19 minutes? (y/N)"
    AUTO_UPDATE_ENABLED="Automatic updates enabled"
    AUTO_UPDATE_DISABLED="Automatic updates disabled"
    AUTO_UPDATE_NOT_CONFIGURED="Automatic updates are not configured"
    AUTO_UPDATE_STATUS="Automatic updates:"
    DEPLOY_MODE_LABEL="Deployment mode:"
    DEPLOY_MODE_DOCKER="Docker image"
    DEPLOY_MODE_SOURCE="Source build"
    CRONTAB_MISSING="crontab was not found; automatic updates cannot be enabled"
    NODE_PLATFORM_UNSUPPORTED="No official Node.js 22 build is available for this platform"
    NODE_CHECKSUM_FAILED="The downloaded Node.js archive failed checksum verification"
    CHECKSUM_TOOL_MISSING="sha256sum or shasum is required to verify the Node.js download"
    RUNTIME_REQUIRED="Neither a usable Docker daemon nor Node.js is available; choose a runtime"
    RUNTIME_CHOICE="Choose a runtime to install:"
    RUNTIME_DOCKER="[1] Install Docker"
    RUNTIME_NODE="[2] Install Node.js 22+"
    RUNTIME_CANCEL="[0] Cancel"
    NODE_REQUIRED="Source installation requires Node.js 22 or newer"
    DOCKER_ONLY_HINT="Node.js is unavailable; showing Docker installation methods only"
    SOURCE_ONLY_HINT="Docker is unavailable; showing source installation methods only"
    SOURCE_STOP_CMD="Stop source service: ./forumlify/.forumlify-stop.sh"
    SOURCE_LOG_CMD="View source logs: tail -f ./forumlify/.forumlify.log"
    DATABASE_REQUIRED="Source mode requires PostgreSQL, but no usable database was found"
    DATABASE_CHOICE="Choose how to install PostgreSQL:"
    DATABASE_DOCKER="Use PostgreSQL in Docker"
    DATABASE_SOURCE="Install PostgreSQL on this machine"
    DATABASE_REMOTE="Use a custom/remote PostgreSQL database"
    DATABASE_HOST_PROMPT="Database host/IP:"
    DATABASE_PORT_PROMPT="Database port (default 5432):"
    DATABASE_NAME_PROMPT="Database name (default forumlify):"
    DATABASE_USER_PROMPT="Database user (default forumlify):"
    DATABASE_PASSWORD_PROMPT="Database password:"
    DATABASE_SSL_PROMPT="SSL mode (remote default require, local default disable):"
    DATABASE_PASSWORD_EMPTY="Database password cannot be empty"
    DATABASE_CONNECTION_FAILED="Cannot connect to PostgreSQL; check the connection details and network"
    DATABASE_SCHEMA_FAILED="Cannot initialize the database schema; ensure this user can create and alter database objects"
    DATABASE_INSTALLING="Installing PostgreSQL..."
    DATABASE_UNAVAILABLE="PostgreSQL installation or startup failed; check the logs and try again"
    DATABASE_READY="PostgreSQL is ready"
fi

# ============================================================
#  工具函数
# ============================================================

pause() {
    echo ""
    echo -n "  ${BOLD}${PRESS_ENTER}${RESET}"
    read -r
}

detect_version() {
    if [ -f ".forumlify-install.conf" ]; then
        awk -F= '$1 == "EDITION" { print $2; exit }' .forumlify-install.conf
        return
    fi
    if [ ! -f "docker-compose.yml" ]; then
        echo "unknown"
        return
    fi
    if grep -q "ghcr.io/forumlify/public:next" docker-compose.yml 2>/dev/null; then
        echo "next"
    elif grep -q "ghcr.io/forumlify/public:lite" docker-compose.yml 2>/dev/null; then
        echo "lite"
    else
        echo "unknown"
    fi
}

detect_install_mode() {
    if [ -f ".forumlify-install.conf" ]; then
        awk -F= '$1 == "DEPLOY_MODE" { print $2; exit }' .forumlify-install.conf
    else
        echo "docker"
    fi
}

detect_runtime_mode() {
    if [ -f ".forumlify-install.conf" ]; then
        awk -F= '$1 == "RUNTIME_MODE" { print $2; exit }' .forumlify-install.conf
        return
    fi
    echo "docker"
}

print_header() {
    if [ -t 1 ] && command -v clear >/dev/null 2>&1; then
        clear
    fi
    echo ""
    echo "  ${BOLD}${TITLE}${RESET}"
    echo "  ${BLUE}${SEPARATOR}${RESET}"
    echo ""
}

print_status() {
    echo "  ${GREEN}>>${RESET} $1"
}

print_error() {
    echo "  ${RED}>>${RESET} $1"
}

print_info() {
    echo "  ${CYAN}>>${RESET} $1"
}

download_file() {
    local url="$1"
    local destination="$2"

    if command -v curl >/dev/null 2>&1; then
        curl --fail --location --show-error "$url" --output "$destination"
    elif command -v wget >/dev/null 2>&1; then
        wget --output-document="$destination" "$url"
    else
        print_error "$DOWNLOADER_MISSING"
        return 1
    fi
}

sha256_file() {
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum "$1" | awk '{print $1}'
    elif command -v shasum >/dev/null 2>&1; then
        shasum -a 256 "$1" | awk '{print $1}'
    else
        print_error "$CHECKSUM_TOOL_MISSING"
        return 1
    fi
}

ensure_node_22() {
    local current_major=0
    local os_name
    local cpu_name
    local archive_name
    local archive_url
    local archive_path
    local checksum_path
    local expected_checksum
    local actual_checksum
    local extract_directory

    if command -v node >/dev/null 2>&1; then
        current_major="$(node -p 'Number(process.versions.node.split(".")[0])' 2>/dev/null || echo 0)"
    fi
    if [ "$current_major" -ge 22 ]; then
        return 0
    fi

    print_status "$NODE_PREPARING"
    case "$(uname -s)" in
        Linux) os_name="linux" ;;
        Darwin) os_name="darwin" ;;
        *) print_error "$NODE_PLATFORM_UNSUPPORTED"; return 1 ;;
    esac
    case "$(uname -m)" in
        x86_64|amd64) cpu_name="x64" ;;
        arm64|aarch64) cpu_name="arm64" ;;
        *) print_error "$NODE_PLATFORM_UNSUPPORTED"; return 1 ;;
    esac

    archive_path="$(mktemp "${TMPDIR:-/tmp}/forumlify-node.XXXXXX.tar.gz")"
    checksum_path="$(mktemp "${TMPDIR:-/tmp}/forumlify-node-sha.XXXXXX")"
    extract_directory="$(mktemp -d "${TMPDIR:-/tmp}/forumlify-node-extract.XXXXXX")"

    download_file "https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt" "$checksum_path"
    archive_name="$(awk '{print $2}' "$checksum_path" | grep -E "^node-v22[.][0-9.]+-${os_name}-${cpu_name}[.]tar[.]gz$" | head -n 1)"
    if [ -z "$archive_name" ]; then
        print_error "$NODE_PLATFORM_UNSUPPORTED"
        return 1
    fi
    archive_url="https://nodejs.org/dist/latest-v22.x/$archive_name"
    download_file "$archive_url" "$archive_path"
    expected_checksum="$(awk -v file="$archive_name" '$2 == file { print $1 }' "$checksum_path")"
    actual_checksum="$(sha256_file "$archive_path")"
    if [ -z "$expected_checksum" ] || [ "$expected_checksum" != "$actual_checksum" ]; then
        print_error "$NODE_CHECKSUM_FAILED"
        return 1
    fi

    mkdir -p "$NODE_RUNTIME_DIR" "$NPM_GLOBAL_DIR"
    tar -xzf "$archive_path" -C "$extract_directory" --strip-components=1
    cp -R "$extract_directory/." "$NODE_RUNTIME_DIR/"
    PATH="$NODE_RUNTIME_DIR/bin:$NPM_GLOBAL_DIR/bin:$PATH"
    export PATH
    node --version
}

install_docker_linux() {
    local installer
    installer="$(mktemp "${TMPDIR:-/tmp}/forumlify-docker-install.XXXXXX")"
    download_file "https://get.docker.com/" "$installer"
    chmod 700 "$installer" || return 1

    if [ "$(id -u)" -eq 0 ]; then
        sh "$installer" || return 1
    elif command -v sudo >/dev/null 2>&1; then
        sudo sh "$installer" || return 1
        if command -v usermod >/dev/null 2>&1 && [ -n "${USER:-}" ]; then
            sudo usermod -aG docker "$USER" || true
        fi
    else
        print_error "$SUDO_REQUIRED"
        return 1
    fi
}

install_docker_macos() {
    local architecture
    local download_url
    local download_directory
    local disk_image

    download_directory="$(mktemp -d "${TMPDIR:-/tmp}/forumlify-docker.XXXXXX")"
    disk_image="$download_directory/Docker.dmg"

    architecture="$(uname -m)"
    case "$architecture" in
        arm64) download_url="https://desktop.docker.com/mac/main/arm64/Docker.dmg" ;;
        x86_64) download_url="https://desktop.docker.com/mac/main/amd64/Docker.dmg" ;;
        *)
            print_error "$UNSUPPORTED_MAC_ARCH: $architecture"
            return 1
            ;;
    esac

    print_status "$MAC_DOCKER_DOWNLOADING"
    download_file "$download_url" "$disk_image" || return 1
    open "$disk_image" || return 1
    print_info "$MAC_DOCKER_OPENED"
    return 0
}

install_docker_runtime() {
    case "$(uname -s)" in
        Linux)
            install_docker_linux || return 1
            ;;
        Darwin)
            install_docker_macos || return 1
            # Docker Desktop must be started by the user after the DMG opens.
            return 1
            ;;
        *)
            print_error "$UNSUPPORTED_OS"
            return 1
            ;;
    esac

    if ! command -v docker >/dev/null 2>&1; then
        print_error "$DOCKER_INSTALL_FAILED"
        return 1
    fi
    if docker info >/dev/null 2>&1; then
        DOCKER_AVAILABLE=true
        print_status "$DOCKER_INSTALLED"
        return 0
    fi
    if command -v sudo >/dev/null 2>&1 && sudo docker info >/dev/null 2>&1; then
        DOCKER_NEEDS_SUDO=true
        DOCKER_AVAILABLE=true
        print_status "$DOCKER_INSTALLED"
        return 0
    fi
    print_error "$DOCKER_DAEMON_UNAVAILABLE"
    return 1
}

ensure_docker_available() {
    local answer

    if command -v docker >/dev/null 2>&1; then
        if docker info >/dev/null 2>&1; then
            DOCKER_AVAILABLE=true
            return 0
        fi
        if [ "$(uname -s)" = "Linux" ] && command -v sudo >/dev/null 2>&1 && sudo docker info >/dev/null 2>&1; then
            DOCKER_NEEDS_SUDO=true
            DOCKER_AVAILABLE=true
            return 0
        fi
        print_error "$DOCKER_DAEMON_UNAVAILABLE"
        return 1
    fi

    print_error "$DOCKER_MISSING"
    echo -n "  ${BOLD}${INSTALL_DOCKER_PROMPT}${RESET} "
    read -r answer
    if [ "$answer" != "y" ] && [ "$answer" != "Y" ]; then
        print_info "$CANCELLED"
        return 1
    fi

    print_status "$INSTALLING_DOCKER"
    install_docker_runtime
}

detect_node_available() {
    local major=0
    if command -v node >/dev/null 2>&1; then
        major="$(node -p 'Number(process.versions.node.split(".")[0])' 2>/dev/null || echo 0)"
    fi
    [ "$major" -ge 22 ]
}

refresh_runtime_capabilities() {
    DOCKER_AVAILABLE=false
    NODE_AVAILABLE=false
    if command -v docker >/dev/null 2>&1; then
        if docker info >/dev/null 2>&1; then
            DOCKER_AVAILABLE=true
        elif [ "$(uname -s)" = "Linux" ] && command -v sudo >/dev/null 2>&1 && sudo -n docker info >/dev/null 2>&1; then
            DOCKER_NEEDS_SUDO=true
            DOCKER_AVAILABLE=true
        fi
    fi
    if command -v node >/dev/null 2>&1; then
        NODE_AVAILABLE=true
    fi
}

ensure_runtime_choice() {
    local answer

    refresh_runtime_capabilities
    if [ "$DOCKER_AVAILABLE" = true ] || [ "$NODE_AVAILABLE" = true ]; then
        return 0
    fi

    while true; do
        print_error "$RUNTIME_REQUIRED"
        echo "  ${RUNTIME_CHOICE}"
        echo "    ${RUNTIME_DOCKER}"
        echo "    ${RUNTIME_NODE}"
        echo "    ${RUNTIME_CANCEL}"
        if [ "$LANG" = "zh" ]; then
            echo -n "  ${BOLD}请输入数字 (0-2):${RESET} "
        else
            echo -n "  ${BOLD}Enter number (0-2):${RESET} "
        fi
        read -r answer
        case "$answer" in
            1)
                print_status "$INSTALLING_DOCKER"
                if install_docker_runtime; then
                    refresh_runtime_capabilities
                fi
                ;;
            2)
                if ensure_node_22; then
                    NODE_AVAILABLE=true
                fi
                ;;
            0|*)
                return 1
                ;;
        esac
        if [ "$DOCKER_AVAILABLE" = true ] || [ "$NODE_AVAILABLE" = true ]; then
            return 0
        fi
    done
}

prepare_install_runtimes() {
    local answer
    refresh_runtime_capabilities

    if [ "$DOCKER_AVAILABLE" = false ] && [ "$NODE_AVAILABLE" = false ] &&
       ! command -v docker >/dev/null 2>&1 && ! command -v node >/dev/null 2>&1; then
        ensure_runtime_choice
        return $?
    fi

    if [ "$DOCKER_AVAILABLE" = false ] && ! command -v docker >/dev/null 2>&1; then
        print_error "$DOCKER_MISSING"
        echo -n "  ${BOLD}${INSTALL_DOCKER_PROMPT}${RESET} "
        read -r answer
        if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
            print_status "$INSTALLING_DOCKER"
            install_docker_runtime || true
            refresh_runtime_capabilities
        else
            print_info "$SOURCE_ONLY_HINT"
        fi
    elif [ "$DOCKER_AVAILABLE" = false ]; then
        print_error "$DOCKER_DAEMON_UNAVAILABLE"
    fi

    if [ "$DOCKER_AVAILABLE" = false ] && [ "$NODE_AVAILABLE" = false ]; then
        ensure_runtime_choice || return 1
    fi
}

docker_run() {
    if [ "$DOCKER_NEEDS_SUDO" = true ]; then
        sudo docker "$@"
    else
        docker "$@"
    fi
}

load_source_env() {
    local key
    local value
    [ -f .env ] || return 0
    while IFS='=' read -r key value || [ -n "$key" ]; do
        case "$key" in
            ''|'#'*) continue ;;
            [A-Za-z_][A-Za-z0-9_]*)
                value="${value%$'\r'}"
                if [ "${value#\"}" != "$value" ] && [ "${value%\"}" != "$value" ]; then
                    value="${value#\"}"
                    value="${value%\"}"
                fi
                export "$key=$value"
                ;;
        esac
    done < .env
}

source_pid_path() {
    printf '%s/.forumlify.pid' "$PWD"
}

source_log_path() {
    printf '%s/.forumlify.log' "$PWD"
}

source_is_running() {
    local pid
    local command_line
    [ -f .forumlify.pid ] || return 1
    pid="$(cat .forumlify.pid 2>/dev/null || true)"
    [ -n "$pid" ] || return 1
    kill -0 "$pid" 2>/dev/null || return 1
    command_line="$(ps -p "$pid" -o command= 2>/dev/null || true)"
    printf '%s' "$command_line" | grep -Fq "$PWD/"
}

stop_source_service() {
    local pid
    if ! [ -f .forumlify.pid ]; then
        return 0
    fi
    pid="$(cat .forumlify.pid 2>/dev/null || true)"
    if [ -n "$pid" ] && source_is_running; then
        kill "$pid" 2>/dev/null || true
        for _ in 1 2 3 4 5; do
            kill -0 "$pid" 2>/dev/null || break
            sleep 1
        done
        kill -9 "$pid" 2>/dev/null || true
    fi
    rm -f .forumlify.pid
}

start_source_service() {
    local log_path
    local pid
    if source_is_running; then
        print_info "Source service is already running"
        return 0
    fi
    load_source_env
    export NODE_ENV=production
    export HOST="${HOST:-0.0.0.0}"
    export PORT="${PORT:-3000}"
    log_path="$(source_log_path)"
    if [ "${EDITION:-lite}" = "next" ]; then
        nohup node "$PWD/node_modules/next/dist/bin/next" start -H "$HOST" -p "$PORT" >> "$log_path" 2>&1 &
    else
        nohup node "$PWD/server.js" >> "$log_path" 2>&1 &
    fi
    pid=$!
    printf '%s\n' "$pid" > .forumlify.pid
    sleep 2
    if ! kill -0 "$pid" 2>/dev/null; then
        print_error "Source service failed to start; see $log_path"
        rm -f .forumlify.pid
        return 1
    fi
}

write_source_service_scripts() {
    cat > .forumlify-stop.sh <<'EOF'
#!/bin/bash
set -Eeuo pipefail
cd "$(dirname "$0")"
if [ -f .forumlify.pid ]; then
    pid="$(cat .forumlify.pid 2>/dev/null || true)"
    command_line="$(ps -p "$pid" -o command= 2>/dev/null || true)"
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null && printf '%s' "$command_line" | grep -Fq "$PWD/"; then
        kill "$pid" 2>/dev/null || true
        for _ in 1 2 3 4 5; do
            kill -0 "$pid" 2>/dev/null || break
            sleep 1
        done
        kill -9 "$pid" 2>/dev/null || true
    fi
    rm -f .forumlify.pid
fi
EOF
    chmod 700 .forumlify-stop.sh
}

ensure_installed_runtime() {
    local mode
    mode="$(detect_install_mode)"
    if [ "$mode" = "source" ]; then
        if ! detect_node_available; then
            ensure_node_22 || return 1
        fi
    else
        ensure_docker_available || return 1
    fi
}

# Generate a cryptographically random, URL-safe JWT secret without printing it.
generate_jwt_secret() {
    if command -v openssl >/dev/null 2>&1; then
        openssl rand -hex 32
    elif [ -r /dev/urandom ]; then
        od -An -N32 -tx1 /dev/urandom | tr -d '[:space:]'
    else
        print_error "Unable to generate JWT_SECRET: openssl and /dev/urandom are unavailable"
        return 1
    fi
}

# Keep the secret in a mode-600 .env file and pass it to the app through a
# generated Compose override. Existing non-default secrets are preserved so an
# update does not invalidate every active session.
ensure_jwt_configuration() {
    local env_file=".env"
    local override_file=".forumlify-compose.override.yml"
    local jwt_secret=""
    local tmp_file="${env_file}.tmp.$$"
    local deploy_mode
    local edition

    if [ -f "$env_file" ]; then
        jwt_secret="$(awk -F= '$1 == "JWT_SECRET" { value=$0; sub(/^[^=]*=/, "", value); print value }' "$env_file" | tail -n 1)"
    fi

    if [ -z "$jwt_secret" ] ||
       [ "$jwt_secret" = "forumlify-secret-key-change-me-in-production" ] ||
       [ "$jwt_secret" = "7sALTz9fZZvoIT2iLc1Uox4mo3bgvofzivIFq6HSPiU=" ]; then
        jwt_secret="$(generate_jwt_secret)"
    fi

    if [ -f "$env_file" ]; then
        awk -F= '$1 != "JWT_SECRET"' "$env_file" > "$tmp_file"
    else
        : > "$tmp_file"
    fi
    printf 'JWT_SECRET=%s\n' "$jwt_secret" >> "$tmp_file"
    mv "$tmp_file" "$env_file"
    chmod 600 "$env_file"

    deploy_mode="$(detect_install_mode)"
    edition="$(detect_version)"
    if [ "$deploy_mode" != "docker" ]; then
        rm -f "$override_file"
        return 0
    fi
    cat > "$override_file" <<'EOF'
# FORUMLIFY JWT CONFIGURATION (generated; do not commit)
version: '3'
services:
  app:
    environment:
      JWT_SECRET: ${JWT_SECRET}
EOF
    if [ "$deploy_mode" = "source" ]; then
        cat >> "$override_file" <<EOF
    image: forumlify-local:${edition}
    build:
      context: ${SOURCE_BUILD_CONTEXT:-.forumlify-build}
      dockerfile: Dockerfile
EOF
    fi
    chmod 600 "$override_file"
}

write_install_configuration() {
    cat > .forumlify-install.conf <<EOF
EDITION=$EDITION
BRANCH=$BRANCH
DEPLOY_MODE=$DEPLOY_MODE
RUNTIME_MODE=${RUNTIME_MODE:-$DEPLOY_MODE}
DATABASE_MODE=${DATABASE_MODE:-existing}
SOURCE_DOCKERFILE=${SOURCE_DOCKERFILE:-Dockerfile}
SOURCE_BUILD_CONTEXT=${SOURCE_BUILD_CONTEXT:-.forumlify-build}
EOF
    chmod 600 .forumlify-install.conf
}

read_env_value() {
    local key="$1"
    if [ -f .env ]; then
        awk -F= -v key="$key" '$1 == key { value=$0; sub(/^[^=]*=/, "", value); print value; exit }' .env
    fi
}

urlencode() {
    local LC_ALL=C
    local input="$1"
    local output=""
    local character
    local hex
    local index
    for ((index = 0; index < ${#input}; index++)); do
        character="${input:index:1}"
        case "$character" in
            [a-zA-Z0-9.~_-]) output+="$character" ;;
            *) printf -v hex '%02X' "'$character"; output+="%$hex" ;;
        esac
    done
    printf '%s' "$output"
}

configure_remote_database() {
    local host
    local port
    local database_name
    local database_user
    local database_password
    local ssl_mode
    local url_host
    local database_url

    echo -n "  ${BOLD}${DATABASE_HOST_PROMPT}${RESET} "
    read -r host
    [ -n "$host" ] || { print_error "$DATABASE_UNAVAILABLE"; return 1; }
    echo -n "  ${BOLD}${DATABASE_PORT_PROMPT}${RESET} "
    read -r port
    port="${port:-5432}"
    echo -n "  ${BOLD}${DATABASE_NAME_PROMPT}${RESET} "
    read -r database_name
    database_name="${database_name:-forumlify}"
    echo -n "  ${BOLD}${DATABASE_USER_PROMPT}${RESET} "
    read -r database_user
    database_user="${database_user:-forumlify}"
    echo -n "  ${BOLD}${DATABASE_PASSWORD_PROMPT}${RESET} "
    read -r -s database_password
    echo ""
    [ -n "$database_password" ] || { print_error "$DATABASE_PASSWORD_EMPTY"; return 1; }
    echo -n "  ${BOLD}${DATABASE_SSL_PROMPT}${RESET} "
    read -r ssl_mode
    if [ -z "$ssl_mode" ]; then
        case "$host" in
            localhost|127.0.0.1|::1) ssl_mode="disable" ;;
            *) ssl_mode="require" ;;
        esac
    fi
    case "$port" in
        ''|*[!0-9]*) print_error "$DATABASE_UNAVAILABLE"; return 1 ;;
    esac
    if [ "$port" -lt 1 ] || [ "$port" -gt 65535 ]; then
        print_error "$DATABASE_UNAVAILABLE"
        return 1
    fi
    case "$ssl_mode" in
        disable|allow|prefer|require|verify-ca|verify-full) ;;
        *) print_error "$DATABASE_UNAVAILABLE"; return 1 ;;
    esac
    case "$host" in
        \[*\]) url_host="$host" ;;
        *:*) url_host="[$host]" ;;
        *) url_host="$host" ;;
    esac
    database_url="postgresql://$(urlencode "$database_user"):$(urlencode "$database_password")@${url_host}:${port}/$(urlencode "$database_name")?sslmode=${ssl_mode}"
    if ! database_url_is_ready "$database_url"; then
        print_error "$DATABASE_CONNECTION_FAILED"
        return 1
    fi
    if ! apply_database_schema_to_url "$database_url"; then
        print_error "$DATABASE_SCHEMA_FAILED"
        return 1
    fi
    write_database_env "$database_url"
    DATABASE_MODE="remote"
}

database_url_is_ready() {
    local database_url="$1"
    if [ -d node_modules/pg ] && command -v node >/dev/null 2>&1; then
        DATABASE_URL="$database_url" node -e 'const { Client } = require("pg"); const client = new Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 }); client.connect().then(() => client.query("SELECT 1")).then(() => client.end()).then(() => process.exit(0)).catch(() => process.exit(1));' >/dev/null 2>&1
        return $?
    fi
    if command -v psql >/dev/null 2>&1; then
        psql "$database_url" -v ON_ERROR_STOP=1 -tAc 'SELECT 1' >/dev/null 2>&1
        return $?
    fi
    return 1
}

database_is_ready() {
    local database_url
    database_url="$(read_env_value DATABASE_URL)"
    [ -n "$database_url" ] || return 1
    database_url_is_ready "$database_url"
}

apply_database_schema_to_url() {
    local database_url="$1"
    [ -f schema.sql ] || return 0
    if [ -d node_modules/pg ] && command -v node >/dev/null 2>&1; then
        DATABASE_URL="$database_url" node -e 'const fs = require("fs"); const { Client } = require("pg"); const client = new Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 }); (async () => { try { await client.connect(); await client.query("BEGIN"); await client.query(fs.readFileSync("schema.sql", "utf8")); await client.query("COMMIT"); } catch (error) { try { await client.query("ROLLBACK"); } catch {} console.error(error.message); process.exitCode = 1; } finally { await client.end().catch(() => {}); } })();'
    elif command -v psql >/dev/null 2>&1; then
        psql "$database_url" -v ON_ERROR_STOP=1 --single-transaction -f schema.sql >/dev/null
    else
        return 1
    fi
}

apply_database_schema() {
    local database_url
    database_url="$(read_env_value DATABASE_URL)"
    [ -n "$database_url" ] || return 1
    apply_database_schema_to_url "$database_url"
}

write_database_env() {
    local database_url="$1"
    local tmp_file=".env.tmp.$$"
    if [ -f .env ]; then
        awk -F= '$1 != "DATABASE_URL"' .env > "$tmp_file"
    else
        : > "$tmp_file"
    fi
    printf 'DATABASE_URL=%s\n' "$database_url" >> "$tmp_file"
    mv "$tmp_file" .env
    chmod 600 .env
}

write_source_database_compose() {
    local database_password
    local database_port=5432
    database_password="$(generate_jwt_secret)"
    while database_port_is_in_use "$database_port"; do
        database_port=$((database_port + 1))
        if [ "$database_port" -gt 5499 ]; then
            print_error "$DATABASE_UNAVAILABLE"
            return 1
        fi
    done
    cat > "$SOURCE_DATABASE_COMPOSE" <<EOF
version: '3'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: forumlify
      POSTGRES_PASSWORD: "$database_password"
      POSTGRES_DB: forumlify
    ports:
      - "${database_port}:5432"
    volumes:
      - ./schema.sql:/docker-entrypoint-initdb.d/schema.sql:ro
      - forumlify_source_db_data:/var/lib/postgresql/data
    restart: unless-stopped
volumes:
  forumlify_source_db_data:
EOF
    chmod 600 "$SOURCE_DATABASE_COMPOSE"
    write_database_env "postgresql://forumlify:${database_password}@127.0.0.1:${database_port}/forumlify"
}

database_port_is_in_use() {
    local port="$1"
    if command -v nc >/dev/null 2>&1; then
        nc -z 127.0.0.1 "$port" >/dev/null 2>&1
    elif command -v lsof >/dev/null 2>&1; then
        lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1
    elif command -v ss >/dev/null 2>&1; then
        ss -ltn | awk -v port=":$port" '$4 ~ port "$" { found=1 } END { exit !found }'
    else
        return 1
    fi
}

database_compose_run() {
    local args=(-f "$SOURCE_DATABASE_COMPOSE")
    if command -v docker >/dev/null 2>&1 && docker_run compose version >/dev/null 2>&1; then
        docker_run compose "${args[@]}" "$@"
    elif command -v docker-compose >/dev/null 2>&1; then
        if [ "$DOCKER_NEEDS_SUDO" = true ]; then
            sudo docker-compose "${args[@]}" "$@"
        else
            docker-compose "${args[@]}" "$@"
        fi
    else
        print_error "Docker Compose is not installed"
        return 1
    fi
}

install_local_postgresql() {
    local os_name="$(uname -s)"
    local brew_installer
    print_status "$DATABASE_INSTALLING"
    if [ "$os_name" = "Darwin" ] && ! command -v brew >/dev/null 2>&1; then
        brew_installer="$(mktemp "${TMPDIR:-/tmp}/forumlify-homebrew-install.XXXXXX")"
        download_file "https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh" "$brew_installer" || return 1
        chmod 700 "$brew_installer"
        NONINTERACTIVE=1 /bin/bash "$brew_installer" || return 1
        if [ -x /opt/homebrew/bin/brew ]; then
            PATH="/opt/homebrew/bin:$PATH"
        elif [ -x /usr/local/bin/brew ]; then
            PATH="/usr/local/bin:$PATH"
        fi
        export PATH
    fi
    if [ "$os_name" = "Darwin" ] && command -v brew >/dev/null 2>&1; then
        brew list postgresql@15 >/dev/null 2>&1 || brew install postgresql@15
        brew services start postgresql@15 >/dev/null 2>&1 || true
        PATH="$(brew --prefix postgresql@15)/bin:$PATH"
        export PATH
    elif [ "$os_name" = "Linux" ] && command -v apt-get >/dev/null 2>&1; then
        if [ "$(id -u)" -eq 0 ]; then
            apt-get update && apt-get install -y postgresql postgresql-contrib
            systemctl enable --now postgresql >/dev/null 2>&1 || service postgresql start >/dev/null 2>&1 || true
        elif command -v sudo >/dev/null 2>&1; then
            sudo apt-get update && sudo apt-get install -y postgresql postgresql-contrib
            sudo systemctl enable --now postgresql >/dev/null 2>&1 || true
        else
            print_error "$DATABASE_UNAVAILABLE"
            return 1
        fi
    elif [ "$os_name" = "Linux" ] && command -v dnf >/dev/null 2>&1; then
        if [ "$(id -u)" -eq 0 ]; then
            dnf install -y postgresql-server postgresql-contrib
            postgresql-setup --initdb >/dev/null 2>&1 || true
            systemctl enable --now postgresql >/dev/null 2>&1 || service postgresql start >/dev/null 2>&1 || true
        elif command -v sudo >/dev/null 2>&1; then
            sudo dnf install -y postgresql-server postgresql-contrib
            sudo postgresql-setup --initdb >/dev/null 2>&1 || true
            sudo systemctl enable --now postgresql >/dev/null 2>&1 || true
        else
            print_error "$DATABASE_UNAVAILABLE"
            return 1
        fi
    else
        print_error "$DATABASE_UNAVAILABLE"
        return 1
    fi

    for _ in 1 2 3 4 5 6 7 8 9 10; do
        local_postgresql_is_ready && return 0
        sleep 2
    done
    return 1
}

local_postgresql_is_ready() {
    if ! command -v psql >/dev/null 2>&1; then
        return 1
    fi
    if [ "$(id -u)" -eq 0 ] && command -v runuser >/dev/null 2>&1 &&
       runuser -u postgres -- psql -d postgres -tAc 'SELECT 1' >/dev/null 2>&1; then
        return 0
    fi
    if command -v sudo >/dev/null 2>&1 && sudo -n -u postgres psql -d postgres -tAc 'SELECT 1' >/dev/null 2>&1; then
        return 0
    fi
    psql -d postgres -tAc 'SELECT 1' >/dev/null 2>&1
}

ensure_local_database_schema() {
    local database_password
    local database_url
    local psql_command
    database_password="$(generate_jwt_secret)"
    database_url="postgresql://forumlify:${database_password}@127.0.0.1:5432/forumlify"
    if ! command -v psql >/dev/null 2>&1; then
        return 1
    fi
    if [ "$(id -u)" -eq 0 ] && command -v runuser >/dev/null 2>&1 && runuser -u postgres -- psql -tAc 'SELECT 1' >/dev/null 2>&1; then
        psql_command=(runuser -u postgres -- psql)
    elif command -v sudo >/dev/null 2>&1 && sudo -u postgres psql -tAc 'SELECT 1' >/dev/null 2>&1; then
        psql_command=(sudo -u postgres psql)
    else
        psql_command=(psql)
    fi
    "${psql_command[@]}" -v ON_ERROR_STOP=1 -d postgres -v forumlify_password="$database_password" -c "DO \\$\$ BEGIN IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'forumlify') THEN CREATE ROLE forumlify LOGIN PASSWORD '${database_password}'; ELSE ALTER ROLE forumlify WITH LOGIN PASSWORD '${database_password}'; END IF; END \\$\$;" >/dev/null
    "${psql_command[@]}" -v ON_ERROR_STOP=1 -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'forumlify'" | grep -q 1 || "${psql_command[@]}" -v ON_ERROR_STOP=1 -d postgres -c 'CREATE DATABASE forumlify OWNER forumlify' >/dev/null
    if [ -f schema.sql ]; then
        PGPASSWORD="$database_password" psql -h 127.0.0.1 -U forumlify -d forumlify -v ON_ERROR_STOP=1 --single-transaction -f schema.sql >/dev/null
    fi
    write_database_env "$database_url"
}

ensure_source_database() {
    local answer
    local docker_choice=0
    local local_choice=0
    local remote_choice=0
    local menu_number=1
    if database_is_ready; then
        DATABASE_MODE="${DATABASE_MODE:-existing}"
        apply_database_schema || return 1
        print_status "$DATABASE_READY"
        return 0
    fi

    case "${DATABASE_MODE:-}" in
        docker)
            [ -f "$SOURCE_DATABASE_COMPOSE" ] || { print_error "$DATABASE_UNAVAILABLE"; return 1; }
            database_compose_run up -d db
            for _ in 1 2 3 4 5 6 7 8 9 10; do
                database_is_ready && break
                sleep 2
            done
            database_is_ready || { print_error "$DATABASE_UNAVAILABLE"; return 1; }
            apply_database_schema || { print_error "$DATABASE_SCHEMA_FAILED"; return 1; }
            print_status "$DATABASE_READY"
            return 0
            ;;
        local)
            install_local_postgresql || return 1
            ensure_local_database_schema || return 1
            apply_database_schema || { print_error "$DATABASE_SCHEMA_FAILED"; return 1; }
            print_status "$DATABASE_READY"
            return 0
            ;;
        remote)
            print_error "$DATABASE_CONNECTION_FAILED"
            return 1
            ;;
    esac

    print_error "$DATABASE_REQUIRED"
    echo "  ${DATABASE_CHOICE}"
    if [ "$DOCKER_AVAILABLE" = true ]; then
        docker_choice=$menu_number
        echo "    [$menu_number] ${DATABASE_DOCKER}"
        menu_number=$((menu_number + 1))
    fi
    local_choice=$menu_number
    echo "    [$menu_number] ${DATABASE_SOURCE}"
    menu_number=$((menu_number + 1))
    remote_choice=$menu_number
    echo "    [$menu_number] ${DATABASE_REMOTE}"
    if [ "$LANG" = "zh" ]; then
        echo -n "  ${BOLD}请输入数字 (1-$menu_number):${RESET} "
    else
        echo -n "  ${BOLD}Enter number (1-$menu_number):${RESET} "
    fi
    read -r answer

    if [ "$answer" = "$docker_choice" ] && [ "$docker_choice" -ne 0 ]; then
        write_source_database_compose || return 1
        database_compose_run up -d db
        DATABASE_MODE="docker"
    elif [ "$answer" = "$local_choice" ]; then
        if ! local_postgresql_is_ready; then
            install_local_postgresql || return 1
        fi
        ensure_local_database_schema || return 1
        DATABASE_MODE="local"
    elif [ "$answer" = "$remote_choice" ]; then
        configure_remote_database || return 1
    else
        print_error "$INVALID_CHOICE"
        return 1
    fi
    for _ in 1 2 3 4 5 6 7 8 9 10; do
        database_is_ready && break
        sleep 2
    done
    database_is_ready || { print_error "$DATABASE_UNAVAILABLE"; return 1; }
    apply_database_schema || { print_error "$DATABASE_UNAVAILABLE"; return 1; }
    print_status "$DATABASE_READY"
}

refresh_source_build_context() {
    local build_context="${SOURCE_BUILD_CONTEXT:-.forumlify-build}"

    if [ -d "$build_context" ]; then
        rm -rf "$build_context"
    fi
    mkdir -p "$build_context"
    git archive HEAD | tar -x -C "$build_context"

    if [ "$EDITION" = "lite" ]; then
        cat > "$build_context/Dockerfile" <<'EOF'
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
EOF
    fi
}

prepare_source_build() {
    ensure_node_22
    print_status "$SOURCE_PREPARING"

    if [ "$EDITION" = "lite" ]; then
        SOURCE_DOCKERFILE="Dockerfile"
        npm ci
        npm run check
    else
        SOURCE_DOCKERFILE="Dockerfile"
        if ! command -v bun >/dev/null 2>&1; then
            npm install --global bun
        fi
        bun install --no-save
        env -u DOCKER npm run build
        for bun_lock in bun.lock bun.lockb; do
            if ! git ls-files --error-unmatch "$bun_lock" >/dev/null 2>&1; then
                rm -f "$bun_lock"
            fi
        done
    fi

    SOURCE_BUILD_CONTEXT=".forumlify-build"
    write_install_configuration
    ensure_jwt_configuration
}

# Use the modern Compose plugin when available and retain compatibility with
# older Docker installations. The override is supplied explicitly so updates
# and status checks use the same JWT configuration as first boot.
compose_run() {
    local compose_args=()
    local compose_v1_command=(docker-compose)
    if [ -f ".forumlify-compose.override.yml" ]; then
        compose_args=(-f docker-compose.yml -f .forumlify-compose.override.yml)
    fi

    if [ "$DOCKER_NEEDS_SUDO" = true ]; then
        compose_v1_command=(sudo docker-compose)
    fi

    # Compose v2 is a Docker CLI plugin; Compose v1 is the standalone binary.
    # Check the executable first so v1-only hosts do not emit a command-not-found
    # error before falling back.
    if command -v docker >/dev/null 2>&1 && docker_run compose version >/dev/null 2>&1; then
        docker_run compose "${compose_args[@]}" "$@"
    elif command -v docker-compose >/dev/null 2>&1; then
        "${compose_v1_command[@]}" "${compose_args[@]}" "$@"
    else
        print_error "Docker Compose is not installed"
        return 1
    fi
}

write_auto_update_script() {
    cat > .forumlify-auto-update.sh <<EOF
#!/bin/bash
set -Eeuo pipefail

INSTALL_DIR="$INSTALL_ROOT/forumlify"
PATH="$NODE_RUNTIME_DIR/bin:$NPM_GLOBAL_DIR/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm_config_prefix="$NPM_GLOBAL_DIR"
export PATH npm_config_prefix
cd "\$INSTALL_DIR"

docker_auto() {
    if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
        docker "\$@"
    elif command -v docker >/dev/null 2>&1 && command -v sudo >/dev/null 2>&1 && sudo -n docker info >/dev/null 2>&1; then
        sudo -n docker "\$@"
    else
        echo "Docker daemon is unavailable to the cron job"
        return 1
    fi
}

if ! mkdir .forumlify-auto-update.lock 2>/dev/null; then
    exit 0
fi
trap 'rmdir .forumlify-auto-update.lock 2>/dev/null || true' EXIT

now="\$(date +%s)"
last_check="\$(cat .forumlify-auto-update.last-check 2>/dev/null || echo 0)"
if [ "\$((now - last_check))" -lt 1140 ]; then
    exit 0
fi
printf '%s\n' "\$now" > .forumlify-auto-update.last-check

read_config() {
    awk -F= -v key="\$1" '\$1 == key { print \$2; exit }' .forumlify-install.conf
}

compose_auto() {
    local args=(-f docker-compose.yml)
    if [ -f .forumlify-compose.override.yml ]; then
        args+=(-f .forumlify-compose.override.yml)
    fi
    if docker_auto compose version >/dev/null 2>&1; then
        docker_auto compose "\${args[@]}" "\$@"
    elif command -v docker-compose >/dev/null 2>&1; then
        if docker info >/dev/null 2>&1; then
            docker-compose "\${args[@]}" "\$@"
        elif command -v sudo >/dev/null 2>&1 && sudo -n docker info >/dev/null 2>&1; then
            sudo -n docker-compose "\${args[@]}" "\$@"
        else
            return 1
        fi
    else
        echo "Docker Compose is unavailable"
        return 1
    fi
}

edition="\$(read_config EDITION)"
branch="\$(read_config BRANCH)"
deploy_mode="\$(read_config DEPLOY_MODE)"

if [ "\$deploy_mode" = "docker" ]; then
    image_ref="ghcr.io/forumlify/public:\$edition"
    before="\$(docker_auto image inspect --format '{{.Id}}' "\$image_ref" 2>/dev/null || true)"
    compose_auto pull app
    after="\$(docker_auto image inspect --format '{{.Id}}' "\$image_ref" 2>/dev/null || true)"
    if [ -z "\$before" ] || [ "\$before" != "\$after" ]; then
        compose_auto up -d app
        echo "Updated \$image_ref to \$after"
    else
        echo "No Docker image update for \$image_ref"
    fi
    exit 0
fi

git fetch origin "\$branch"
remote_commit="\$(git rev-parse "origin/\$branch")"
deployed_commit="\$(cat .forumlify-deployed-commit 2>/dev/null || true)"
if [ "\$remote_commit" = "\$deployed_commit" ]; then
    echo "No source update for \$branch"
    exit 0
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Tracked source changes exist; automatic update skipped"
    exit 1
fi
git merge --ff-only "origin/\$branch"

node_major="\$(node -p 'Number(process.versions.node.split(".")[0])' 2>/dev/null || echo 0)"
if [ "\$node_major" -lt 22 ]; then
    echo "Node.js 22 or newer is unavailable"
    exit 1
fi

if [ "\$edition" = "lite" ]; then
    npm ci
    npm run check
else
    if ! command -v bun >/dev/null 2>&1; then
        npm install --global bun
    fi
    bun install --no-save
    env -u DOCKER npm run build
    for bun_lock in bun.lock bun.lockb; do
        if ! git ls-files --error-unmatch "\$bun_lock" >/dev/null 2>&1; then
            rm -f "\$bun_lock"
        fi
    done
fi

database_url="\$(awk -F= '\$1 == "DATABASE_URL" { value=\$0; sub(/^[^=]*=/, "", value); print value; exit }' .env 2>/dev/null)"
if [ -z "\$database_url" ]; then
    echo "DATABASE_URL is missing; automatic update aborted"
    exit 1
fi
DATABASE_URL="\$database_url" node -e 'const fs = require("fs"); const { Client } = require("pg"); const client = new Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 }); (async () => { try { await client.connect(); await client.query("BEGIN"); await client.query("SELECT 1"); await client.query(fs.readFileSync("schema.sql", "utf8")); await client.query("COMMIT"); } catch (error) { try { await client.query("ROLLBACK"); } catch {} console.error(error.message); process.exitCode = 1; } finally { await client.end().catch(() => {}); } })();'

if [ -f .forumlify.pid ]; then
    pid="\$(cat .forumlify.pid 2>/dev/null || true)"
    command_line="\$(ps -p "\$pid" -o command= 2>/dev/null || true)"
    if [ -n "\$pid" ] && kill -0 "\$pid" 2>/dev/null && printf '%s' "\$command_line" | grep -Fq "\$PWD/"; then
        kill "\$pid" 2>/dev/null || true
        for _ in 1 2 3 4 5; do
            kill -0 "\$pid" 2>/dev/null || break
            sleep 1
        done
        kill -9 "\$pid" 2>/dev/null || true
    fi
    rm -f .forumlify.pid
fi
load_source_env() {
    [ -f .env ] || return 0
    while IFS='=' read -r key value || [ -n "\$key" ]; do
        case "\$key" in
            ''|'#'*) continue ;;
            [A-Za-z_][A-Za-z0-9_]*) export "\$key=\${value%\$'\\r'}" ;;
        esac
    done < .env
}
load_source_env
export NODE_ENV=production HOST="\${HOST:-0.0.0.0}" PORT="\${PORT:-3000}"
if [ "\$edition" = "next" ]; then
    nohup node "\$PWD/node_modules/next/dist/bin/next" start -H "\$HOST" -p "\$PORT" >> .forumlify.log 2>&1 &
else
    nohup node "\$PWD/server.js" >> .forumlify.log 2>&1 &
fi
new_pid="\$!"
printf '%s\\n' "\$new_pid" > .forumlify.pid
sleep 2
if ! kill -0 "\$new_pid" 2>/dev/null; then
    echo "Updated source service failed to start; see .forumlify.log"
    rm -f .forumlify.pid
    exit 1
fi
printf '%s\n' "\$remote_commit" > .forumlify-deployed-commit
echo "Updated source deployment to \$remote_commit"
EOF
    chmod 700 .forumlify-auto-update.sh
}

cron_run() {
    crontab "$@"
}

disable_auto_update() {
    local cron_file
    local cron_marker="FORUMLIFY_AUTO_UPDATE:$INSTALL_ROOT"
    cron_file="$(mktemp "${TMPDIR:-/tmp}/forumlify-crontab.XXXXXX")"

    if ! command -v crontab >/dev/null 2>&1; then
        print_info "$AUTO_UPDATE_NOT_CONFIGURED"
        return 0
    fi

    { cron_run -l 2>/dev/null || true; } | awk -v marker="$cron_marker" 'index($0, marker) == 0' > "$cron_file"
    cron_run "$cron_file"
    print_status "$AUTO_UPDATE_DISABLED"
}

enable_auto_update() {
    local cron_file
    local updater_path="$INSTALL_ROOT/forumlify/.forumlify-auto-update.sh"
    local log_path="$INSTALL_ROOT/forumlify/.forumlify-auto-update.log"
    local cron_marker="FORUMLIFY_AUTO_UPDATE:$INSTALL_ROOT"

    if ! command -v crontab >/dev/null 2>&1; then
        print_error "$CRONTAB_MISSING"
        return 1
    fi

    write_auto_update_script
    cron_file="$(mktemp "${TMPDIR:-/tmp}/forumlify-crontab.XXXXXX")"
    { cron_run -l 2>/dev/null || true; } | awk -v marker="$cron_marker" 'index($0, marker) == 0' > "$cron_file"
    printf '* * * * * "%s" >> "%s" 2>&1 # %s\n' "$updater_path" "$log_path" "$cron_marker" >> "$cron_file"
    cron_run "$cron_file"
    print_status "$AUTO_UPDATE_ENABLED"
}

offer_auto_update() {
    local answer

    if [ "$DEPLOY_MODE" = "docker" ]; then
        echo -n "  ${BOLD}${AUTO_UPDATE_DOCKER_PROMPT}${RESET} "
        read -r answer
        if [ "$answer" = "n" ] || [ "$answer" = "N" ]; then
            disable_auto_update
        else
            enable_auto_update
        fi
    else
        echo -n "  ${BOLD}${AUTO_UPDATE_SOURCE_PROMPT}${RESET} "
        read -r answer
        if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
            enable_auto_update
        else
            disable_auto_update
        fi
    fi
}

# ============================================================
#  安装模式
# ============================================================

install_forumlify() {
    print_header
    if ! prepare_install_runtimes; then
        pause
        return
    fi
    echo "  ${SELECT_VERSION}"
    echo ""
    local menu_number=1
    local lite_docker_choice=0
    local lite_source_choice=0
    local next_docker_choice=0
    local next_source_choice=0
    if [ "$DOCKER_AVAILABLE" = true ]; then
        lite_docker_choice=$menu_number; echo "    [$menu_number] ${LITE_DOCKER_DESC}"; menu_number=$((menu_number + 1))
    fi
    if [ "$NODE_AVAILABLE" = true ]; then
        lite_source_choice=$menu_number; echo "    [$menu_number] ${LITE_SOURCE_DESC}"; menu_number=$((menu_number + 1))
    fi
    if [ "$DOCKER_AVAILABLE" = true ]; then
        next_docker_choice=$menu_number; echo "    [$menu_number] ${NEXT_DOCKER_DESC}"; menu_number=$((menu_number + 1))
    fi
    if [ "$NODE_AVAILABLE" = true ]; then
        next_source_choice=$menu_number; echo "    [$menu_number] ${NEXT_SOURCE_DESC}"; menu_number=$((menu_number + 1))
    fi
    echo ""
    if [ "$LANG" = "zh" ]; then
        echo -n "  ${BOLD}请输入数字 (1-$((menu_number - 1))):${RESET} "
    else
        echo -n "  ${BOLD}Enter number (1-$((menu_number - 1))):${RESET} "
    fi
    read -r version_choice

    if [ "$version_choice" = "$lite_docker_choice" ] && [ "$lite_docker_choice" -ne 0 ]; then
            BRANCH="Lite"
            VERSION_NAME="LITE"
            EDITION="lite"
            DEPLOY_MODE="docker"
    elif [ "$version_choice" = "$lite_source_choice" ] && [ "$lite_source_choice" -ne 0 ]; then
            BRANCH="Lite"
            VERSION_NAME="LITE"
            EDITION="lite"
            DEPLOY_MODE="source"
    elif [ "$version_choice" = "$next_docker_choice" ] && [ "$next_docker_choice" -ne 0 ]; then
            BRANCH="next"
            VERSION_NAME="NEXT"
            EDITION="next"
            DEPLOY_MODE="docker"
    elif [ "$version_choice" = "$next_source_choice" ] && [ "$next_source_choice" -ne 0 ]; then
            BRANCH="next"
            VERSION_NAME="NEXT"
            EDITION="next"
            DEPLOY_MODE="source"
    else
            print_error "${INVALID_CHOICE}"
            pause
            return
    fi

    if [ "$DEPLOY_MODE" = "source" ] && [ "$NODE_AVAILABLE" = false ]; then
        print_error "$NODE_REQUIRED"
        pause
        return
    fi

    print_status "${DOWNLOADING} ${VERSION_NAME} ..."

    if [ -d "forumlify" ]; then
        print_info "${DIR_EXISTS}"
        echo -n "  ${BOLD}${OVERWRITE}${RESET} "
        read -r overwrite
        if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
            print_info "${CANCELLED}"
            pause
            return
        fi
        disable_auto_update
        if [ -f forumlify/.forumlify-install.conf ]; then
            existing_mode="$(awk -F= '$1 == "DEPLOY_MODE" { print $2; exit }' forumlify/.forumlify-install.conf)"
            if [ "$existing_mode" = "source" ]; then
                (cd forumlify && stop_source_service)
            elif [ "$DOCKER_AVAILABLE" = true ]; then
                (cd forumlify && compose_run down 2>&1 | sed 's/^/  /') || true
            fi
        fi
        print_info "Moving existing installation aside before overwrite"
        mv forumlify "forumlify.backup.$(date +%Y%m%d-%H%M%S)"
    fi

    mkdir -p forumlify
    cd forumlify

    print_status "${CLONING} ${VERSION_NAME} ..."
    git clone --branch "$BRANCH" --single-branch https://github.com/forumlify/public.git . 2>&1 | sed 's/^/  /'

    SOURCE_DOCKERFILE="Dockerfile"
    RUNTIME_MODE="$DEPLOY_MODE"
    write_install_configuration
    if [ "$DEPLOY_MODE" = "source" ]; then
        prepare_source_build
        ensure_source_database
        write_source_service_scripts
        write_install_configuration
    else
        ensure_jwt_configuration
    fi
    print_status "${STARTING} ${VERSION_NAME} ..."
    if [ "$DEPLOY_MODE" = "source" ]; then
        start_source_service
        git rev-parse HEAD > .forumlify-deployed-commit
    else
        compose_run up -d 2>&1 | sed 's/^/  /'
    fi
    offer_auto_update

    echo ""
    print_status "${COMPLETE}"
    echo ""
    echo "  ${URL_INFO}"
    echo "  ${ADMIN_INFO}"
    if [ "$DEPLOY_MODE" = "source" ]; then
        echo "  ${SOURCE_STOP_CMD}"
        echo "  ${SOURCE_LOG_CMD}"
    else
        echo "  ${STOP_CMD}"
        echo "  ${LOGS_CMD}"
    fi
    echo ""
    cd ..
    pause
}

# ============================================================
#  更新模式
# ============================================================

update_forumlify() {
    print_header
    print_status "${UPDATE_ACTION}"

    if [ ! -d "forumlify" ] || [ ! -f "forumlify/docker-compose.yml" ]; then
        print_error "${NOT_FOUND}"
        pause
        return
    fi

    cd forumlify
    VERSION="$(detect_version)"
    DEPLOY_MODE="$(detect_install_mode)"
    EDITION="$VERSION"

    if [ "$DEPLOY_MODE" = "source" ]; then
        if ! detect_node_available; then
            ensure_node_22 || { cd ..; pause; return; }
        fi
    elif ! ensure_docker_available; then
        pause
        return
    fi

    if [ "$DEPLOY_MODE" = "source" ]; then
        BRANCH="$(awk -F= '$1 == "BRANCH" { print $2; exit }' .forumlify-install.conf)"
        RUNTIME_MODE="$(awk -F= '$1 == "RUNTIME_MODE" { print $2; exit }' .forumlify-install.conf)"
        DATABASE_MODE="$(awk -F= '$1 == "DATABASE_MODE" { print $2; exit }' .forumlify-install.conf)"
        RUNTIME_MODE="${RUNTIME_MODE:-source}"
        DATABASE_MODE="${DATABASE_MODE:-existing}"
        SOURCE_DOCKERFILE="$(awk -F= '$1 == "SOURCE_DOCKERFILE" { print $2; exit }' .forumlify-install.conf)"
        git fetch origin "$BRANCH" 2>&1 | sed 's/^/  /'
        git merge --ff-only "origin/$BRANCH" 2>&1 | sed 's/^/  /'
        prepare_source_build
        ensure_source_database
        write_source_service_scripts
        stop_source_service
        start_source_service
        git rev-parse HEAD > .forumlify-deployed-commit
        print_status "${UPDATE_DONE}"
    elif [ "$VERSION" = "next" ]; then
        print_status "${UPDATE_NEXT}"
        ensure_jwt_configuration
        compose_run pull app 2>&1 | sed 's/^/  /'
        compose_run up -d 2>&1 | sed 's/^/  /'
        print_status "${UPDATE_DONE}"
    elif [ "$VERSION" = "lite" ]; then
        print_status "${UPDATE_LITE}"
        ensure_jwt_configuration
        compose_run pull app 2>&1 | sed 's/^/  /'
        compose_run up -d 2>&1 | sed 's/^/  /'
        print_status "${UPDATE_DONE}"
    else
        print_error "${VERSION_UNKNOWN}"
    fi

    cd ..
    pause
}

# ============================================================
#  卸载模式
# ============================================================

uninstall_forumlify() {
    print_header

    if [ ! -d "forumlify" ]; then
        print_error "${NOT_INSTALLED}"
        pause
        return
    fi

    echo "  ${YELLOW}${UNINSTALL_CONFIRM}${RESET}"
    echo ""
    echo "  ${UNINSTALL_DELETE}"
    echo "  ${UNINSTALL_CONTAINERS}"
    echo "  ${UNINSTALL_VOLUMES}"
    echo "  ${UNINSTALL_IMAGES}"
    echo "  ${UNINSTALL_SOURCE}"
    echo ""
    echo -n "  ${BOLD}${CONFIRM_UNINSTALL}${RESET} "
    read -r confirm

    if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
        print_info "${CANCELLED}"
        pause
        return
    fi

    disable_auto_update

    cd forumlify
    DEPLOY_MODE="$(detect_install_mode)"
    if [ "$DEPLOY_MODE" = "source" ]; then
        print_status "${STOPPING}"
        stop_source_service
        if [ "$(awk -F= '$1 == "DATABASE_MODE" { print $2; exit }' .forumlify-install.conf 2>/dev/null)" = "docker" ] && [ -f "$SOURCE_DATABASE_COMPOSE" ]; then
            database_compose_run down -v 2>&1 | sed 's/^/  /' || true
        fi
    else
        if ! ensure_docker_available; then
            pause
            return
        fi
        print_status "${STOPPING}"
        compose_run down -v 2>&1 | sed 's/^/  /' || true

        print_status "${REMOVING_IMAGES}"
        while IFS= read -r image_name; do
            [ -n "$image_name" ] && docker_run rmi -f "$image_name" 2>&1 | sed 's/^/  /' || true
        done < <(docker_run images --format '{{.Repository}}:{{.Tag}}' | grep -E "forumlify|ghcr.io/forumlify/public" || true)
    fi

    cd ..
    print_status "${REMOVING_SOURCE}"
    rm -rf forumlify

    echo ""
    print_status "${UNINSTALL_DONE}"
    echo ""
    echo "  ${PRUNE_HINT}"
    echo "  ${PRUNE_CMD}"
    echo ""
    pause
}

# ============================================================
#  状态查看模式
# ============================================================

show_status() {
    print_header

    if [ ! -d "forumlify" ] || [ ! -f "forumlify/docker-compose.yml" ]; then
        print_info "${NOT_INSTALLED}"
        pause
        return
    fi

    cd forumlify

    VERSION="$(detect_version)"
    DEPLOY_MODE="$(detect_install_mode)"
    if [ "$VERSION" = "next" ]; then
        VERSION_TEXT="${VERSION_NEXT}"
    elif [ "$VERSION" = "lite" ]; then
        VERSION_TEXT="${VERSION_LITE}"
    else
        VERSION_TEXT="${VERSION_UNKNOWN}"
    fi

    echo "  ${BOLD}${STATUS_TITLE}${RESET}"
    echo ""
    echo "  ${VERSION_LABEL} ${VERSION_TEXT}"
    if [ "$DEPLOY_MODE" = "source" ]; then
        echo "  ${DEPLOY_MODE_LABEL} ${DEPLOY_MODE_SOURCE}"
    else
        echo "  ${DEPLOY_MODE_LABEL} ${DEPLOY_MODE_DOCKER}"
    fi
    if { cron_run -l 2>/dev/null || true; } | grep -Fq "FORUMLIFY_AUTO_UPDATE:$INSTALL_ROOT"; then
        echo "  ${AUTO_UPDATE_STATUS} ${AUTO_UPDATE_ENABLED}"
    else
        echo "  ${AUTO_UPDATE_STATUS} ${AUTO_UPDATE_DISABLED}"
    fi
    echo ""
    echo "  ${CONTAINER_STATUS}"
    if [ "$DEPLOY_MODE" = "source" ]; then
        if source_is_running; then
            echo "    ${STARTING} (PID $(cat .forumlify.pid))"
        else
            echo "    ${NOT_RUNNING}"
        fi
    else
        if ensure_docker_available; then
            compose_run ps 2>&1 | sed 's/^/    /' || echo "    ${NOT_RUNNING}"
        else
            echo "    ${NOT_RUNNING}"
        fi
    fi

    echo ""
    echo "  ${IMAGE_INFO}"
    if [ "$DEPLOY_MODE" = "source" ]; then
        echo "    ${SOURCE_LOG_CMD}"
    elif [ "$VERSION" = "next" ]; then
        docker_run images ghcr.io/forumlify/public:next --format "    {{.Repository}}:{{.Tag}} ({{.Size}})" 2>&1 || echo "    ${NO_IMAGE}"
    elif [ "$VERSION" = "lite" ]; then
        docker_run images ghcr.io/forumlify/public:lite --format "    {{.Repository}}:{{.Tag}} ({{.Size}})" 2>&1 || echo "    ${NO_IMAGE}"
    fi

    cd ..
    echo ""
    pause
}

# ============================================================
#  主程序
# ============================================================

main_menu() {
    print_header

    if [ -d "forumlify" ] && [ -f "forumlify/docker-compose.yml" ]; then
        INSTALLED=true
    else
        INSTALLED=false
    fi

    echo "  ${SELECT_ACTION}"
    echo ""
    echo "  ${INSTALL_ACTION}"
    if [ "$INSTALLED" = true ]; then
        echo "  ${UPDATE_ACTION}"
        echo "  ${UNINSTALL_ACTION}"
        echo "  ${STATUS_ACTION}"
        echo "  ${DISABLE_AUTO_UPDATE_ACTION}"
    else
        echo "  ${UPDATE_ACTION} (${NOT_INSTALLED})"
        echo "  ${UNINSTALL_ACTION} (${NOT_INSTALLED})"
        echo "  ${STATUS_ACTION} (${NOT_INSTALLED})"
        echo "  ${DISABLE_AUTO_UPDATE_ACTION}"
    fi
    echo "  ${EXIT_ACTION}"
    echo ""
    echo -n "  ${BOLD}${ENTER_ACTION}${RESET} "
    read -r choice

    case $choice in
        0)
            if [ -t 1 ] && command -v clear >/dev/null 2>&1; then
                clear
            fi
            echo ""
            echo "  ${BOLD}${GOODBYE}${RESET}"
            echo ""
            exit 0
            ;;
        1) install_forumlify ;;
        2)
            if [ "$INSTALLED" = true ]; then
                update_forumlify
            else
                print_header
                print_error "${NOT_FOUND}"
                pause
            fi
            ;;
        3)
            if [ "$INSTALLED" = true ]; then
                uninstall_forumlify
            else
                print_header
                print_error "${NOT_INSTALLED}"
                pause
            fi
            ;;
        4) show_status ;;
        5)
            print_header
            disable_auto_update
            pause
            ;;
        *)
            print_header
            print_error "${INVALID_CHOICE}"
            pause
            ;;
    esac

    main_menu
}

# ============================================================
#  启动
# ============================================================

main_menu
