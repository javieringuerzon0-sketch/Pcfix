@echo off
REM ========================================
REM SCRIPT DE CREACIÓN DE NUEVO CLIENTE
REM ========================================
REM
REM Este script automatiza la creación de un nuevo cliente:
REM 1. Crea un nuevo branch desde main
REM 2. Copia la plantilla de configuración
REM 3. Abre el archivo para editar
REM 4. Hace commit inicial
REM 5. Push al repositorio remoto
REM
REM ========================================

setlocal

echo.
echo ========================================
echo   CREADOR DE NUEVO CLIENTE
echo ========================================
echo.

REM Verificar que estamos en el directorio correcto
if not exist "js\client-config.TEMPLATE.js" (
    echo ERROR: No se encuentra la plantilla client-config.TEMPLATE.js
    echo Asegurate de ejecutar este script desde la raiz del proyecto.
    pause
    exit /b 1
)

REM Pedir nombre del cliente
set /p CLIENT_NAME="Ingresa el nombre del cliente (sin espacios, ejemplo: techpro): "

if "%CLIENT_NAME%"=="" (
    echo ERROR: Debes ingresar un nombre de cliente.
    pause
    exit /b 1
)

REM Crear nombre del branch
set BRANCH_NAME=cliente-%CLIENT_NAME%

echo.
echo Creando nuevo cliente: %CLIENT_NAME%
echo Branch: %BRANCH_NAME%
echo.

REM Asegurarse de estar en main actualizado
echo [1/6] Cambiando a branch main...
git checkout main
if errorlevel 1 (
    echo ERROR: No se pudo cambiar a main
    pause
    exit /b 1
)

echo [2/6] Actualizando main desde remoto...
git pull origin main

REM Crear nuevo branch
echo [3/6] Creando nuevo branch %BRANCH_NAME%...
git checkout -b %BRANCH_NAME%
if errorlevel 1 (
    echo ERROR: No se pudo crear el branch
    pause
    exit /b 1
)

REM Copiar plantilla
echo [4/6] Copiando plantilla de configuracion...
copy "js\client-config.TEMPLATE.js" "js\client-config.js" >nul
if errorlevel 1 (
    echo ERROR: No se pudo copiar la plantilla
    pause
    exit /b 1
)

echo.
echo ========================================
echo   CONFIGURACION COPIADA
echo ========================================
echo.
echo Ahora se abrira el archivo client-config.js
echo.
echo INSTRUCCIONES:
echo 1. Edita TODOS los campos con la informacion del cliente
echo 2. Guarda el archivo (Ctrl+S)
echo 3. Cierra el editor
echo 4. Vuelve a esta ventana para continuar
echo.
pause

REM Abrir archivo para editar
notepad "js\client-config.js"

echo.
echo [5/6] Creando commit inicial...

REM Agregar archivo al staging
git add js\client-config.js

REM Crear commit
git commit -m "config: Add new client %CLIENT_NAME% configuration"
if errorlevel 1 (
    echo ERROR: No se pudo crear el commit
    pause
    exit /b 1
)

echo [6/6] Subiendo branch al repositorio remoto...
git push -u origin %BRANCH_NAME%
if errorlevel 1 (
    echo ERROR: No se pudo hacer push
    echo Intenta manualmente: git push -u origin %BRANCH_NAME%
    pause
    exit /b 1
)

echo.
echo ========================================
echo   CLIENTE CREADO EXITOSAMENTE
echo ========================================
echo.
echo Branch: %BRANCH_NAME%
echo Archivo: js\client-config.js
echo.
echo SIGUIENTES PASOS:
echo.
echo 1. Verifica en GitHub que el branch se haya subido
echo 2. Ve a Vercel y configura el deploy para este branch
echo 3. Asigna el dominio personalizado (si aplica)
echo.
echo Para cambiar a este cliente en el futuro usa:
echo    git checkout %BRANCH_NAME%
echo.
echo Para volver a main usa:
echo    git checkout main
echo.
pause
