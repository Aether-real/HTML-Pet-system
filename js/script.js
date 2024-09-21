 /*
 这里是实现消息框 效果 什么的
 底下有注释，自己看吧，还是挺全的
 不会改的不要改，想改就找作者
 制作人Aether
 QQ：3032571243
 */
 
	
	
		const pet = document.getElementById('pet');
        const actionMessage = document.getElementById('actionMessage');
        const interactionPanel = document.getElementById('interactionPanel');
        const actionsList = document.getElementById('actionsList');

        const actions = [
            { name: "摇一摇", animation: "shake 0.5s" },
            { name: "跳跃", animation: "jump 0.5s" },
            { name: "转圈", animation: "spin 1s" },
            { name: "躲避", animation: "dodge 0.5s" },
            { name: "扭动", animation: "twist 1s" },
            { name: "亲吻", animation: "kiss 1s" },
            { name: "舞蹈", animation: "dance 1s infinite" },
            { name: "翻滚", animation: "roll 1s" },
            { name: "空翻", animation: "flip 1s" },
            { name: "跃起", animation: "leap 0.5s" },
            { name: "伸展", animation: "stretch 1s" },
            { name: "后空翻", animation: "backflip 1s" },
            { name: "侧手翻", animation: "cartwheel 1s" },
            { name: "左右移动", animation: "shuffle 0.5s" },
            { name: "翻滚前空翻", animation: "somersault 1s" },
            { name: "挥手", animation: "wave 1s" },
            { name: "水波效果", animation: "rippleEffect 2s" },
            { name: "水滴落下", animation: "splash 1s" },
            { name: "浮动效果", animation: "float 1.5s infinite" },
            { name: "弹入效果", animation: "bounceIn 1s" },
        ];

        actions.forEach((action) => {
            const button = document.createElement('button');
            button.className = 'action-button';
            button.textContent = action.name;
            button.onclick = () => executeAction(action);
            actionsList.appendChild(button);
        });

        function randomMove() {
            const x = Math.random() * (window.innerWidth - 100); // 计算随机位置
            pet.style.transform = `translateX(${x}px)`; // 使用transform进行水平移动
            pet.style.opacity = '0'; // 先将透明度设为0
            setTimeout(() => {
                pet.style.opacity = '1'; // 渐变回可见
            }, 200); // 渐变效果
        }

        function executeAction(action) {
            randomMove(); // 随机移动小球

            setTimeout(() => { // 等待移动之后再执行动作
                pet.style.animation = action.animation;
                displayMessage(`宠物做了: ${action.name}`); // 显示动作信息

                setTimeout(() => {
                    pet.style.animation = ''; // 清除动画
                }, 1000); // 动画持续时间
            }, 500); // 等待500毫秒再执行动作
        }

        function displayMessage(message) {
            actionMessage.textContent = message;
            actionMessage.style.opacity = 1; // 显示消息框
            setTimeout(() => {
                actionMessage.style.opacity = 0; // 隐藏消息框
            }, 5000); // 消息持续时间
        }

        // 设置定时器，随机时间段触发动作
        function startRandomActions() {
            setTimeout(() => {
                executeAction(actions[Math.floor(Math.random() * actions.length)]);
                startRandomActions(); // 递归调用
            }, 10000); // 每 10 秒执行一个动作
        }

        // 右键菜单
        pet.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            showPanel(); // 显示互动面板
        });

        // 显示互动面板
        function showPanel() {
            interactionPanel.classList.add('show');
        }

        // 关闭互动面板
        function closePanel() {
            interactionPanel.classList.remove('show');
        }

        // 启动随机动作
        startRandomActions();