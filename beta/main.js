function clickBudget(){
    var budget = document.getElementById("selectBudget").value

    $("#budget-js-box").html(budget)

    return budget
}

function clickSize(){
    var size = document.getElementById("selectSize").value

    if(size=="ATX"){
        $("#size-js-box").html("ATX")
    }else{
        $("#size-js-box").html(size)
    }

    return size
}

function clickCpu(){
    var cpu = document.getElementById("selectCpu").value

    $("#cpu-js-box").html(cpu)

    return cpu
}

function clickGpu(){
    var gpu = document.getElementById("selectGpu").value

    $("#gpu-js-box").html(gpu)

    return gpu
}

function clickRam(){
    var ram = document.getElementById("selectRam").value

    $("#ram-js-box").html(ram)

    return ram
}

function clickRom(){
    var rom = document.getElementById("selectRom").value

    $("#rom-js-box").html(rom)

    return rom
}

function clickAll(){
    var budget = clickBudget()
    var size = clickSize()
    var cpu = clickCpu()
    var gpu = clickGpu()
    var ram = clickRam()
    var rom = clickRom()

    $("#output-error-1").html("")
    $("#output-error-2").html("")
    $("#output-error-3").html("")
    $("#output-error-4").html("")
    $("#output-error-5").html("")
    $("#output-error-6").html("")

    if(budget==""){
        $("#output-error-1").html("予算を選択してください")
        var s1 = 0
    }else{
        var s1 = 1
    }

    if(size==""){
        $("#output-error-2").html("サイズを選択してください")
        var s2 = 0
    }else{
        var s2 = 1
    }

    if(cpu==""){
        $("#output-error-3").html("CPUを選択してください")
        var s3 = 0
    }else{
        var s3 = 1
    }

    if(gpu==""){
        $("#output-error-4").html("GPUを選択してください")
        var s4 = 0
    }else{
        var s4 = 1
    }

    if(ram==""){
        $("#output-error-5").html("RAMを選択してください")
        var s5 = 0
    }else{
        var s5 = 1
    }

    if(rom==""){
        $("#output-error-6").html("ROMを選択してください")
        var s6 = 0
    }else{
        var s6 = 1
    }

    if (s1==1&&s2==1&&s3==1&&s4==1&&s5==1&&s6==1){

        $("#output-h2").html("合計")

        $("#output-colon-1").html(":")
        $("#output-colon-2").html(":")
        $("#output-colon-3").html(":")
        $("#output-colon-4").html(":")
        $("#output-colon-5").html(":")
        $("#output-colon-6").html(":")
        $("#output-colon-7").html(":")
        $("#output-colon-8").html(":")
        $("#output-colon-9").html(":")

        // output ▼ ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

        if(budget==="8~9万円"){
            if(size==="ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock H570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3GHxtcn[0]
                    var mb_price = a3GHxtcn[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i3-12100F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3x59CjL[0]
                    var cpu_price = a3x59CjL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3aj0a3y[0]
                    var fan_price = a3aj0a3y[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B550")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3ahLZM7[0]
                    var mb_price = a3ahLZM7[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Athlon 3000G")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3aj0a3y[0]
                    var cpu_price = a3aj0a3y[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake ATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wRmx7s[0]
                var case_price = a3wRmx7s[1]
            }
            
            if(size==="Micro-ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B560")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a38jXXEj[0]
                    var mb_price = a38jXXEj[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i3-12100F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3x59CjL[0]
                    var cpu_price = a3x59CjL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3aj0a3y[0]
                    var fan_price = a3aj0a3y[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A320")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MMg5FD[0]
                    var mb_price = a3MMg5FD[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Athlon 3000G")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3aj0a3y[0]
                    var cpu_price = a3aj0a3y[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake MicroATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wObU5t[0]
                var case_price = a3wObU5t[1]
            }
            
            if(size==="Mini-ITX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B560")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x9Gx6R[0]
                    var mb_price = a3x9Gx6R[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i3-12100F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3x59CjL[0]
                    var cpu_price = a3x59CjL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3aj0a3y[0]
                    var fan_price = a3aj0a3y[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A320")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x4fbPj[0]
                    var mb_price = a3x4fbPj[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Athlon 3000G")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3aj0a3y[0]
                    var cpu_price = a3aj0a3y[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake MiniITX")
                
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wObU5t[0]
                var case_price = a3wObU5t[1]
            }
        
            if(gpu==="NVIDIA GeForce"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("MSI GTX1650")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a39SOuEq[0]
                var gpu_price = a39SOuEq[1]
            }
            
            if(gpu==="AMD Radeon"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("ASUS R7 250")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3z70Kvz[0]
                var gpu_price = a3z70Kvz[1]
            }
        
            $("#output-psu").html("電源ユニット")
            $("#output-a-7").html("玄人志向 400W")
        
            var a7 = document.getElementById("output-a-7")
            a7.href = a3m5x0r7[0]
            var psu_price =a3m5x0r7[1]
        }
        
        if(budget==="10~13万円"){
            if(size==="ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock H570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3GHxtcn[0]
                    var mb_price = a3GHxtcn[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-11700KF")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3NaoanL[0]
                    var cpu_price = a3NaoanL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3yXU82k[0]
                    var fan_price = a3yXU82k[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A320")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MMg5FD[0]
                    var mb_price = a3MMg5FD[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 3500")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3yXU82k[0]
                    var cpu_price = a3yXU82k[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake ATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wRmx7s[0]
                var case_price = a3wRmx7s[1]
            }
            
            if(size==="Micro-ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B560")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a38jXXEj[0]
                    var mb_price = a38jXXEj[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-11700KF")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3NaoanL[0]
                    var cpu_price = a3NaoanL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3yXU82k[0]
                    var fan_price = a3yXU82k[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A320")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MMg5FD[0]
                    var mb_price = a3MMg5FD[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 3500")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3yXU82k[0]
                    var cpu_price = a3yXU82k[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake MicroATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wObU5t[0]
                var case_price = a3wObU5t[1]
            }
            
            if(size==="Mini-ITX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B560")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x9Gx6R[0]
                    var mb_price = a3x9Gx6R[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-11700KF")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3NaoanL[0]
                    var cpu_price = a3NaoanL[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3yXU82k[0]
                    var fan_price = a3yXU82k[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A320")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x4fbPj[0]
                    var mb_price = a3x4fbPj[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 3500")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3yXU82k[0]
                    var cpu_price = a3yXU82k[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("Thermaltake MiniITX")
                
                var a6 = document.getElementById("output-a-6")
                a6.href = a3wObU5t[0]
                var case_price = a3wObU5t[1]
            }
        
            if(gpu==="NVIDIA GeForce"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("MSI GTX1650")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a39SOuEq[0]
                var gpu_price = a39SOuEq[1]
            }
            
            if(gpu==="AMD Radeon"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("玄人志向 RX550")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3xf0gSR[0]
                var gpu_price = a3xf0gSR[1]
            }
        
            $("#output-psu").html("電源ユニット")
            $("#output-a-7").html("玄人志向 500W")
        
            var a7 = document.getElementById("output-a-7")
            a7.href = a38SoYPf[0]
            var psu_price = a38SoYPf[1]
        }
        
        if(budget==="14~16万円"){
            if(size==="ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock H570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3GHxtcn[0]
                    var mb_price = a3GHxtcn[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
        
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3m2uHoO[0]
                    var fan_price = a3m2uHoO[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASUS B550")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x6Rxkm[0]
                    var mb_price = a3x6Rxkm[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 5600X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3m2uHoO[0]
                    var cpu_price = a3m2uHoO[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI ATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
            
            if(size==="Micro-ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B660M")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MRLQND[0]
                    var mb_price = a3MRLQND[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3m2uHoO[0]
                    var fan_price = a3m2uHoO[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B550")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3LLDGVP[0]
                    var mb_price = a3LLDGVP[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 5600X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3m2uHoO[0]
                    var cpu_price = a3m2uHoO[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI MicroATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
            
            if(size==="Mini-ITX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B560")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href =a3x9Gx6R[0]
                    var mb_price = a3x9Gx6R[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3m2uHoO[0]
                    var fan_price = a3m2uHoO[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock A520")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3NbvI9W[0]
                    var mb_price = a3NbvI9W[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 5 5600X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3m2uHoO[0]
                    var cpu_price = a3m2uHoO[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI MiniATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
            
            if(gpu==="NVIDIA GeForce"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("ASUS RTX2060")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3yWmj1G[0]
                var gpu_price = a3yWmj1G[1]
            }
            
            if(gpu==="AMD Radeon"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("ASUS RX 6500 XT")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3PWjnrO[0]
                var gpu_price = a3PWjnrO[1]
            }
            
            $("#output-psu").html("電源ユニット")
            $("#output-a-7").html("玄人志向 600W")
        
            var a7 = document.getElementById("output-a-7")
            a7.href = a38PDQht[0]
            var psu_price = a38PDQht[1]
        }
        
        if(budget==="無制限"){
            if(size==="ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASUS Z690")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3m7kTKa[0]
                    var mb_price = a3m7kTKa[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3t7KVRr[0]
                    var fan_price = a3t7KVRr[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock X570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3x3fKJs[0]
                    var mb_price = a3x3fKJs[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 9 5950X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3t7KVRr[0]
                    var cpu_price = a3t7KVRr[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI ATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
            
            if(size==="Micro-ATX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B660M")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MRLQND[0]
                    var mb_price = a3MRLQND[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3t7KVRr[0]
                    var fan_price = a3t7KVRr[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock X570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MboX6x[0]
                    var mb_price = a3MboX6x[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 9 5950X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3t7KVRr[0]
                    var cpu_price = a3t7KVRr[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI MicroATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
            
            if(size==="Mini-ITX"){
                if(cpu==="Intel"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("Deepcool AK620")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3GiSWs5[0]
                    var fan_price = a3GiSWs5[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASRock B660M")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3MRLQND[0]
                    var mb_price = a3MRLQND[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("i7-12700F")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3MKQJIi[0]
                    var cpu_price = a3MKQJIi[1]
                }
                
                if(cpu==="AMD"){
                    $("#output-fan").html("CPUクーラー")
                    $("#output-a-8").html("純正(CPU付属)")
                    
                    var a8 = document.getElementById("output-a-8")
                    a8.href = a3t7KVRr[0]
                    var fan_price = a3t7KVRr[1]
        
                    $("#output-mb").html("マザーボード")
                    $("#output-a-3").html("ASUS X570")
        
                    var a3 = document.getElementById("output-a-3")
                    a3.href = a3N6i8oo[0]
                    var mb_price = a3N6i8oo[1]
        
                    $("#output-cpu").html("CPU")
                    $("#output-a-1").html("Ryzen 9 5950X")
        
                    var a1 = document.getElementById("output-a-1")
                    a1.href = a3t7KVRr[0]
                    var cpu_price = a3t7KVRr[1]
                }
        
                $("#output-case").html("PCケース")
                $("#output-a-6").html("MSI MiniATX")
        
                var a6 = document.getElementById("output-a-6")
                a6.href = a3LJRIY6[0]
                var case_price = a3LJRIY6[1]
            }
        
            if(gpu==="NVIDIA GeForce"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("MSI RTX3090 Ti")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3Na5ogr[0]
                var gpu_price = a3Na5ogr[1]
            }
            
            if(gpu==="AMD Radeon"){
                $("#output-gpu").html("GPU")
                $("#output-a-2").html("ASRock RX6700XT")
            
                var a2 = document.getElementById("output-a-2")
                a2.href = a3wLYOqP[0]
                var gpu_price = a3wLYOqP[1]
            }
                
            $("#output-psu").html("電源ユニット")
            $("#output-a-7").html("玄人志向 1000W")
        
            var a7 = document.getElementById("output-a-7")
            a7.href = a395LIeG[0]
            var psu_price = a395LIeG[1]
        }
        
        if(ram==="8GB"){
            $("#output-ram").html("RAM")
            $("#output-a-4").html("TEAM 8GBx1枚")
        
            var a4 = document.getElementById("output-a-4")
            a4.href = a3PCf7Ol[0]
            var ram_price = a3PCf7Ol[1]
        }
        
        if(ram==="16GB"){
            $("#output-ram").html("RAM")
            $("#output-a-4").html("TEAM 8GBx2枚")
        
            var a4 = document.getElementById("output-a-4")
            a4.href = a3GjGcBx[0]
            var ram_price = a3GjGcBx[1]
        }
        
        if(ram==="32GB"){
            $("#output-ram").html("RAM")
            $("#output-a-4").html("TEAM 16GBx2枚")
        
            var a4 = document.getElementById("output-a-4")
            a4.href = a3lG1D6b[0]
            var ram_price = a3lG1D6b[1]
        }
        
        if(rom==="256GB"){
            $("#output-rom").html("ROM")
            $("#output-a-5").html("SP 256GB")
        
            var a5 = document.getElementById("output-a-5")
            a5.href =　a3LZCKgN[0]
            var rom_price = a3LZCKgN[1]
        }
        
        if(rom==="512GB"){
            $("#output-rom").html("ROM")
            $("#output-a-5").html("SP 512GB")
        
            var a5 = document.getElementById("output-a-5")
            a5.href = a3LQu8Zr[0]
            var rom_price = a3LQu8Zr[1]
        }
        
        if(rom==="1TB"){
            $("#output-rom").html("ROM")
            $("#output-a-5").html("SP 1TB")
        
            var a5 = document.getElementById("output-a-5")
            a5.href = a3lHTgHp[0]
            var rom_price = a3lHTgHp[1]
        }

        // output ▲ ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

        var total_price = cpu_price+gpu_price+mb_price+ram_price+rom_price+case_price+psu_price+fan_price+"円<br><br>"

        $("#output-total").html(total_price)

    }
}