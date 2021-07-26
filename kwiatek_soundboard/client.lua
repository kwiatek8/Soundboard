ESX					= nil
local PlayerData = {}

CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getShtestaredObjtestect', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
	
	Citizen.Wait(5000)
	PlayerData = ESX.GetPlayerData()
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
    PlayerData = xPlayer
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
    PlayerData.job = job
end)

local display = true
local display_x = true

CreateThread(function()
	while ESX and ESX.PlayerData.job == nil do Wait(1) end
	while true do
		Wait(1)
		--if ESX.PlayerData and ESX.PlayerData.job.name == "mechanic" and display_x then
		if PlayerData.job ~= nil and PlayerData.job.name == 'mechanic' then
			if IsDisabledControlJustPressed(0, 57) then
				display_x = false
				soundboard_display()
			end
		else
			Wait(500)
		end
	end
end)

function soundboard_display()
	if display then
		SendNUIMessage({
			type = "ui",
			display = true
		})
		display = false
		SetNuiFocus(true, true)
	else
		SendNUIMessage({
			type = "ui",
			display = false
		})
		SetNuiFocus(false, false)
		display = true
	end
end

RegisterNUICallback("wybor", function(data)
	soundboard_display()
	if data.wybor == "dzwiekoff" then
		TriggerServerEvent("InteractSound_SV:STOP", 30)
	elseif data.wybor == "mlotek" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'uderz_mlotek', 0.2)
	elseif data.wybor == "odkurzacz" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'odkurzacz', 0.2)
	elseif data.wybor == "scierka" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'czyszczenie_szyby', 0.2)
	elseif data.wybor == "wiertarka" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'sruba', 0.2)
	elseif data.wybor == "wiertarka2" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'sruba2', 0.2)
	elseif data.wybor == "klucz" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'klucz', 0.2)
	elseif data.wybor == "klucz2" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'klucz2', 0.2)
	elseif data.wybor == "szlifierka" then
		TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 15, 'szlifierka', 0.1)
	end
	Wait(1000)
	display_x = true
end)