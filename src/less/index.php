<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Adguard Assistant</title>


    <style>
        .adgurd-alert {
            position: fixed !important;
            font: 12px Arial, sans-serif !important;
            line-height: 1.5 !important;
            z-index: 2147483646 !important;
            width: auto !important;
            background: none !important;
            height: auto !important;
            zoom: 1 !important;
            display: inline-block !important;
            margin: 0 !important;
            border: 0 !important;
            padding: 0 !important;
            left: auto !important;
            right: auto !important;
            padding: 0 !important;
        }
        .adguard-assistant-button-right {
            right: 0 !important;
        }
        .adguard-assistant-button-bottom {
            bottom: 0 !important;
        }
        .adgurd-alert-wrap {
            margin: 0 !important;
            border: 0 !important;
            background: none !important;
            width: auto !important;
            padding: 0 !important;
        }
        [class^=adgurd-alert-logo-] {
            cursor: pointer;
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZGYyNmZjNC1hYWFkLTkzNDMtYmU5Yi0wMTc4ODMzNjEzOGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZFOEYwQTg5QkY2MTFFNDkzQTlBNDMwQjdFQ0Q0RUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZFOEYwQTc5QkY2MTFFNDkzQTlBNDMwQjdFQ0Q0RUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkZjI2ZmM0LWFhYWQtOTM0My1iZTliLTAxNzg4MzM2MTM4YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ZGYyNmZjNC1hYWFkLTkzNDMtYmU5Yi0wMTc4ODMzNjEzOGEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6+VxhCAAAkbUlEQVR42uxdB3hU1fKf3TQgtIQWSOi9S0BEQQVUVFQs2FGfHbAhNlBQLKCoIDYUfP7VpyiKvYCKBVFQ4VEEAtJ7QqgBUkjd/c9vzt1NdrM3uXf37gZ8d77vfNmce865M+fOmTMzt/wcy5YtoyDIyeVkLgO49OLSjksyl3jteC6XdC4bueAEC7j8l4vLf6CePXtSKHTKj5eH0t0yOYzQkrM/IZsURZtsn8LlTi7D4uPjm9aqVYtq1KhB1apVo5iYGIqKipJGJSUlcUVFRYn5+fld8/LyhmZnZ1Nubu4uPvQ+l+lcdlex3F45uDStoF0cl0QuXbkM1eqOJzn+8YpXj8uTXG5NTk6OTUxMpNjYWP1Bo6OlVK9enRISEqSusLCw6aFDh8amp6ffx/++yeUxLgcjLK9XDi6xQY4BRR3LpSrlOOHJaaDNlVzWN27c+I7U1NTYpKSkCpVOj9AHfTEGxsKYXK6KoKxXaue8IwSl8xFJGyvScvzjLR6OvcIWa0SDBg0I26oV5HA4qEmTJhiv/v79+z9cvnx5f66+m3294jDK+AqXEWEavz6XD7mIHFyKbbUK3uLV4PJ5w4YNR7Rq1coypStLGBNj4xw4FytgjTDIJ3KEUenK0gjtXDVstQrO4qFudqNGjS5MSUkJOwNNmzaFFbxw7969s1n5hlpo+UQOLhdGcD4v1M459ES1fCFmCUKyeK+yFRoSCaXzhph8LpwT57ZwWIw1pAqundVy/E9YvKvYpxsOKxRpwjmLi4uHs9VbyFZvdojDwdkfXoXzinMv1KyfZcRz04z/XEsq79iJSwMuRaTSOju4/MLlI56/bWGWzxAfXHT5cJRJICPVsL5du3b1w+HTGaGcnBzasGHDIf7ZgSdvf5BbQz0t0qxfxYta5ODilSPYBLKmcJMRmSclJUXh+nhyp263G6kqKciXZmZmurSLPpbncKfFW62XDy5RlQzl5YPLzoq22omNGzeuMqUD1axZk5gHJGyfCmGYiceB0oFClcOjdNi605KTk69JTU2N4r9Uu3ZtSU8hQ+B0OkUJUYdjrGxOtOU+a7nvNRa7EGlcrjGgdB7dEj60vwEVD5p8C1/0Kr9aGg83a6s8mC3gluPIlblZ4ylYpRuFSLlt27a1kAOFohkhtG3fvn1N/vk+jzHaAjlGaRF7MFZJ+OAyOpCPN5JXSYxRwVxs3v/O3kJ/HlhJG3O205acnXSo8DDlFh+T4/HR1Skxti61rtmM2tVsQX3q96COtVqT08D44AG8pKenj+R/HzYpJPrEGI6s+FzgC/yBT/ALvsE/CPJALsgHOSEv5Ib8BilG4+nhIJQOfuq0zp07O2DRgtk9unTp4khLS5vKY2WwJfwoBH95Gi5NCIqLvlO5ZGjbr/h4sHo7unbtmlLZHYnM/AP00c659G3mr5RVeETqYp0x1LRGY2pSvSHVjFYprJziPMo4to925e2hQleR1CXE1qHzk86gq5pdQEnVKt4J4a+sWbMGjmpznjCXQZ/EqTm2lYbjOD/4AD/gS87JfIJf8A3+5eKxPJAL8kFOEOSG/JgHzIcBEjmwXo36eJq1X8v+ds1QXR/4fRs3bszhn52N+Hx+Pl4zbausaZUbDz7g88HinRwfH59i5DbY0MV3UrG7hFJqJNEVKefRKfW6U6fabdhyOHUso4vWHd1MSw6uonmZC+mDnV/TnF3zaPFZFS8+8AKecnNz8eTIEoNCnWxE6UCf9p1O0Y4o2p2XSR/v/k74A5/gN7BldIqckHdw0pl0bbOL6Mqmg6nvT4bulKVovC0xcYGeYatf0wp/G2NgLN5Bng3ka1XGh4VK59l2hQ8o3kCjArrITWc26E3Pdn+QbWfllhcXrEuddlJubnU5jVn1PP12YJnhCWPFG2Digg00nrx00ML9S4UfN1W+bUIh045slPLW1k9E/tPr9zIz4YblYGsH63g1/DR/92ZZ1mpadGCF8LEzL4Oyi3LVXMXEU7MaTWSe+9VPpV4J3XzcGozFinclj41Id4dBnoWPQO4Jxsd5cD6cF+cX68r8gC/wBz7BbwC3BBHxWCheTzzaZIRqR8dTCVs8h4nt/ts9v1KnOm2oOTOIvhjDCGk8mbm6hh/sO1qcS1Fs8YwonYfOb3wGrTuymXbwxKIvxjBBZuSA0pXbQi7//S6ePxcNbNiHbmoxlFrWTKE6McpgHCnKpm05u2lF1lqatG4G8+ekz/pO9w84nJmZmVdrFscQHxTgBsMnp70q4/+87096e/uncl6cHwR+wFdqQmca12mE8HvZ4jsDBbRXQ/HaG3Ve68bWpoPsbBulz9N/oG8yFtAbSSqrgL4YwwhpPLU3ccEMtz1ceJTqcRBhlC5NPocubDKAbs98VCUKuS/GCAdvsI6BdiAEOe+dMkX8zXK7Ay/mJtUaUYfareiylEF0/ZIHAu4grHgDTCjegIA5IpYd48MfLudP8mLMyN9L649upc92zxd+9caG9jVGItJQroKtFkypkajuh72L6dVN79ETXe4RC4E+6IsxDIWDiicz+R3DbT18GImyz2nUl+5qez1NSHtZLDb6eOYhHLwxdcFzjP4Uz4FOVtFRXVdg4rrpEuygTXx0+R1MG7OLGT4CVeZy4JUQU1vXtRrf6U4J3tAmVwvSAo0NxavleXK4MmpVs6mkGDyTvjJrHQ3lLeCxtJck6PDQHwdX0uN8oe5rfzOlVE/yXmz0xRhGSOPJjHdtuO3WnF2SMvEsgh4JnehT3kKe7DJKgg4PnVqvBz3OC+eFDW/R7mOZ3sWHvhgjHLwh+Y2HaP2pZXwKn1MFpR/v+paWHVojv+EuPMVK16ZWc+rKPhfaoK0/aWM2MMNHoMptubv5GqrU5BVNz6deiV21fImDHmWl25y9g9awj4c2aKtDDZxmZu+UxO7yd/GB5UptWdD6sQn0feZv9OLGd6QOJ4XTPoB9kQsa9/f29fTxjFGVtOTQKvnbt75yC+EMHyjMonOTTqd7290odbiICCIWsC8zd88v3r6ePp4xIkW9ErqKw+5RttF/PS18P7f+37Kgr2mmHsJBG7QNFy3LWiOBhUfZpp30iOjBQx1ukwU5e+c3cgxt0FY/wOOtuaSkxNBJu9XtIIP/uPd3tR06o2lytwfEtGIVztgym+5dOZES2I8b0/F2n77og74YwwhpPGWbSVkZbbj68Hq5WGc3Ok3+L3IV09jVU2Srwioe0foaerHHeMpiP+7Zv9/w6Ys+6IsxwsEb04Hi4vJPVJ2T1JeWHlzFPO6XVM5lKefS8GWP8u7yl1gaKAGOoQ3a+pM25n4zfAR0oTIXU+963fmaN5DU2Ge7v6eZvZ7i3eEksbxYFDiGNmirQ/uheHuKiooMcYJtCFYBOa9V2sQjATul+1iqFhVHb2/7lPJKjrFfN0ocXg+hLfoMatTPZyuriDSe9piYKMNt4RbASiM3111bCEgMP7BqMuWXFNBNLYdSjajq7Ne9JA6zh9AWfebvXeTjWljJGxK2x44dK1eZXL0RDWzUh17a+K78P6rtDbKrPN31Pm86A8fQBm39SRszzQwfgSrTj+2ln/f+SaPa3aDOueld2RUeWfOCN72DY2iDtjqUBsXbkJ+fb5ibYc2GyOp6c+scb13bWi3o8c53y++bWl5OJ9Xt6NPnza0fS59hzY0/HqfxtMHERJlpS+/v/EpW562trvTWbcreTo+vfUV+v73tE/rr8N8+fW5tdYX0eX/HV2Z3KDO8/Yy7DYHorjbX04qsNPoi/Qdx5Cd2HS0LAYQ6HEObgCZXjbnADB96B17d/B6lJnShSzjaR2Azfs00MSwg1OEY2lRAC6B4y/Py8gxzg7sWQ5IH0tJDq2l+5qLS+JhXHybilpa+j9WgzVL2h9AnUCpAjzSezLz0u9yMJuCuxVfpP1PvxG40KKlf6Yzw6sVE/t8239tbaNOb/VP0CZRKqMw1MtH2I+3RpvLeflwCPdPtQfan/yNpKg/hN+pwDG0CUZnHpQzzQTrvDx8oyKKHVz/P/vC/JM3kIfxGHY6hje59CB4boc4CvRWmR3e0uY6DhRX07Po3JHfkiQ6RevBPW6ANJgN9TDlF5lfoArPa8NrmWRwspNKYDrdL7skTrSMV5J9GQhtMJvoEQYZ569mz5/bly5fPQbLX/+4FKJUj8BfYoX9o9bNed2fB/j+lDsd0lA5/5mBsEzyj7RwKcPcCtCJrHd3HAc5z3cZ43ZUBDfpIHY5VQBhzOyze0tzc3N24MW+U6sbUoic630PH2B8avfJp2ldQ/rVS1OEY2qBt3RjjGQXwAp5IvbVvlJaSyResDxdl04S1L1N19k+n9XiEGsbVK9cGdTiGNmh7uCjbrNKZlQM0Jj09PQcPxgYiKNisU6bSnvx9UvBbT+kwBsbCmEEsGPTJ0TsIBbtuyf3UuFpDKfhdidJ5+XBqpm/WoUOHzIX3iV3p4Y7DJb81ctkEH0cSv1GHY2jjyfUYJY2XWZU9mRLAhJs2R8iHPfP3TMk3vt7rCR/HHL9Rh2No48mdmaRZZPKTF9pTJLdt2LDBred/I5PwauoEKXpP+xQUFOCJbmT7bwvmaWRSTw7fJhkcHUIm4K4VT0ip5GkdtzbWTo/igabzqih0G3/OTOiiJgNpXKeRcpvkpqVj6XfeflHwG3U4hjZmCDyAF1KfiDBL6FNottPXGT/TpHWvy22nt3tPptN4+0XBb9ThGNoEQcHKAeXDu7qj165d6zp69Kjp/rB0aWlpuKAPamMFS8IHBfm9mDJK96A2lsoBlnnnYjre8MfL1qYTsgdX0bi0F3yelpjU5T55jMgsZWRk0J49e2bwZI00lNQu/44ALvQdwcwO+AXfZZ+2gFyQL0iaQepBUDVPQbxzoT36Pis5OblWIJ9Pz6fTttfhPI8fmJoD/XcuhmjW2+yzWsIHFx8+/F/22dC+fft6eHrVLO0vOERP/z1Dfj/ScQQ1iEsMapXy1gCHsT1P2MEgJ6qelr6oF4ymgG/wD4I8kCtIEjmozHdVQnzZBzf38bKPEzf8ce/Vc2sNyWHk6cq87AMHfkyYXvYRPqjyz594+aAAL/s4/D5TdnViYuLsli1bUlXQtm3b4N8NM7NKdSYKkdhsqloa5r/KQ/1Mmd/rjXiSt6EnltMSvgu06HVrsOcw+EK3IT646PLhfzf6Q77w/XklRfzd2l27dkHp3jC7NVTgl/Snqnu39g1/pbOCNAs2WStVSSHzEegTFvfs27evscPhiNjXBHbv3k18TtwOuNvCYe8h9ThSpL8mYLUcEaVIfTzSqROJXbN3795vYYUiYen4XHNxTl7RhRYOLXJw+TaC122uds5Cssm04oFwv+pitkIz4XfpJTJDIYyJsXEO/vdSVrq8MMgncnCZGYG5FDm0c9oUxFbrITweMoL9rl+4vIKvDOBla6Pv3uomdNxupEtQkG28x4LvpFRGIgep73ngCQCrvzJwQNvWZ9vqFLrF83fUOyK3tmLFikLkiIw+RuVz9bkP+mIMjIUxI3yxPtTOOcOirbBQG6ujrXTWWjz/VY1E6KT09PS7uFwXHx+fXPbj23gXFt/xkASOyyX3W3G7B0+ZaB/fxtfTkYDEJ7yq6qPVXjm43MUFTy4kmxzjeJDjf0bxvAEoqa//PIKXrbngfhieBcdn+hECezLPOVpbfKYfjyvhflPQn+kPRyDtkYPUy9Ynqhz/M4rnIUz8EjL3dvzxSP8UOU44cph9MMAmmyIVXNhkk614NtmKZ5NNtuLZZCueTTbZimeTrXg22eSl6OXLl1cpA6ECJdNb0SfObN9s4+t5FS8ESxkxZOswW/x/ghz/eMWzEbpthG5LyP9lHz0yhdAdiPC0Cl7U1t6Z9SJbR3irtQKh2ysSmUXotrdaU8GFjdCtIxLZCN1h2WpthG5jZCN0W2jxbIRu82QjdIdo8WyE7uDphEfojlR6ykbotp5shO4gLJ6N0G0N2Qjd/3SE7gBbw3GL0B1sOiWSCN2VbLU2QncFZCN02wjd5slG6PZROhuh24eA6wqknvTviPDRwixWanyK1oO1BawrfNI1oTNvfN2Jks9jG9STN/bK89WRROgWfsAX+AOf4Bd8e7C6IA/kgnyQE/JCbrfhW7U2Qrc20xQKQjcBS2vdK0SbWYHz96m6qDii2m15LbTgaa6jXbAjRNnbiY5uIiopUHXVGhK1Gcau6N08KxUbATMI3WV8EsMI3XJ+8AF+qmmfdgOf4Bd8Fx3R1KaOkgvyQU4Q5Ib8mIccQy6UF6HbqI9XlQjdfj7e8YHQTZ+05+nj4AWgHp14ITcZxPFML1ZfnS0f6Df7OXjJmK8uVhovnHWvEt14rMLThBuhmy7fwGrKxgigIOteV/yBTz20HsgHOSEvlLUL7xqd7iJ6p7qhbBHZCN1lt13zCN2yxTS/mOisT4xZXlywhqeoctJ4op8uZ13/xvCEhQuhW7bYHV8qfoyAJUMh9y1R5a+JSv5mpvLSISN0y9zjA+C75zEffyrr7AExAagKrHLDPqzmg3mBDPRxa6xE6JZxMT7Og/PhvB5QF/ADvsAf+AS/5d0S8wjdcgJXsbntfgtbOsCo12mv+uogz/hTOBG6ZYKc0caUzkOt2dIB1v7IBtVXH7kmEIWM0E2fdFALoMVlRN0fYX+0I8+l9pln4Ixk/U2UuZBo8XC14K/Y6B9wWILQTZevV+Nv/4xo1dPqvB6cE/ADvpLOJOo7U/H7cbtAAa05hG6Kq8/OdqbxKVz/Bm+x/yEavFD9j75xxjId4UTopoIDHEQkGR+5w+28xf6LaN6Z6n/0LThAYeFNB6FbgpxLlikLU843qcubWEte4D0Ur1/0CriDWIHQLcEXxodlK+ecH2Yvbhsv0JXq2l+i+8idOYRuqsPae2STsahu2xyiZRzMnfmushDog7512hkLB8OI0E1H2BrUaWsoyqaWvDP0Yldn4Q3KYqMP+h7ZSGHhTQehm2I50tYDMIFlWXQrX/Rdqk1seQRtqxC6qZAjfR1AF7GE/d7kRdBUtSnUxecwh9At6QakGI5qk575m9oCFl6vgg5vHPc917GFOIWDiVqtVR36oC/GMEDhROiW9AhSJrW1RZB0utpCznxPBR3esOBcrmOLvYSDiewtqg590DdrLYWFNx2EbgIiZpaG+rluOtEeDzwauwu/sdIBHBk+F9r4oWdK3swihG4ComWCppOd7uQlNaA0Y3I6Kx3AkeHjoY0f+mUZMofQTU3OVn93zVN/ETRg29kym2jpA6oOJ4XT3vxSorY3lPb19PGMUZWU8aP623SwxvMS5Qa05qCv9xRNtj4qiNjxOdGmd0v7evp4xogU4QJ75hDKNv8ixffvd6kF3eXe0nluPCB8fEDhPXMAZRv0tdKD015VCzLtxdJ52qOPHWgKoZuAaI3BPVi1zli+OHNUXgyrcPljPCEXsDLywur7mm9f9EFfDRW7MgonQjcBYRwXy4NV6yrkxXKlysthFfd8kid0LivjfnbW/UCC0Ad9NZRyy3nTQeimVlcRpbOy5+xQqZwOHETM6692F2xvUAIcQ5tW5R+Itgqhm7Z+RJTMxqNmc5UaW89BxOBf1O6A7R6LAsfQZqtuztocQrdsQ7AKiO48E48E7NlfsC2voaIcoBvCr4PDW/ZCo0/rq323sgoonAjd4hbASiPa9iwEJIZ/vISvUJ6KGoE2Cb8ODnPZhYc+Wz70dS2s5E0HoZtqtVIR7dKH1P+9n1O7ysAPSzMFOIY2aOsfm1iE0E3ZW1VEi/N7zold4eerSyN9HEObbF18FfMI3ZI8xepa+URpXWI3ojPeUb+7j+ML1M+3z19Pqj5djN82DDdCtySzsTp7TCitO7Sa6Ncb1e9Vk3jBLPLtc9Jjqo/0NUWWIHTTyZNVymTDv5UjP+ADtRDkDP9Wx04OjHliJUI3/XesSpm0v00FNguuVYZF4vfb1DG00SfzCN1y16Ldzezj/MSmtAwoIFZa//f54ozzM80fKvOPPoFSAToUboRuuWux8S32Oc/iralMnhQr9ZdhvFgm+W11V6vtA30CpRIqJksQugkI5wPZZVn6IPud75TW4zfqcEwHBd1KhG4CQvnP7HL0fp79+BtL6/EbdTimj2IufEDxTCN0U69JSsDf7/RNK8C3cEb7pi3QBm17TTJ1ikggdNOycWqCTpvum+aBb+Iq9k0joQ3aLhsXjEtuCqGb/8zRULXLU9IZROd8pRRt0e2q4DfqcCyw0uFPsAjdgSnzV6IfhihF6/eGKviNOhzTp+ARuiVHAz+uOFdFV7kB3mtGHY6hDdpWM/6IXKQQuiXnBT8uOl5FZ/EBbvWiDsfQBm3zD5hVOssRukXBLmYDn7NdFfzWUbpwInSLgn3Zk4OJFqrgd8VKFzpCt4Tsp72u8lvzzvJ1JPFb6raoNibD+0gidEvI//tIlW8c/JOvY47fUtdatdmzIBhrFxaEbskknDdfFZ2nfSKB0C2ZgO8GqVLx0zrWIXRTu5uUicVtkq9O5bX9rSr4jTocQxsTVBUI3bTxbbVl4bbTkD+IUs5XBb9Rh2NoY55shO5SpfNB6HaW2Q7eBNSTaULQgJwX+MLWioLfqMMxswZI8fAWT1Yw3yUROYKaGgQNyEFiSrC1ouA36nAsOHqLQvi+Cs/BS/zn0k2bNmXr+nw6Ph1bOmxr1/EYUy1IGwsfJvORZbdXANn48GEZQjflpbNl0N6b7jeDA4rkoFapWYRunZd9gkboFr77KaRxkQdyBUflELpDfNknIgjdBl72sRG6K5io4xKhO9SP9kQCodvgC90hI3QH+lrUjIYNG1YJQve+ffuA0D3coomC2apKhO7y5z4RvhYVoS8J2Ajd1tMJjdAdqcVhI3RbSzZCdwiKJ6EC2QjdZslG6A5xq/WQjdBtjGyEbgstXlmyEbr1t3IboTtIMvoNZA8h2hBka6sQuqsIbsArB0USodv+BnLQilfWUlqCbF3FOBeWyWErnnU+XkVkI3TbFJrFsxG6bTpegwubbLIVzyZb8WyyyVY8m2zFs8kmW/FsshXPJpu8dMIjdB87t9MJM9nVv19na5xH8UKwlDZCt00RUzwbodtG6LaETniEbpNbbZUidNtbrbngwkbo1hGJbITusGy1NkK3MbIRui20eDZCt3myEbpDtHg2QnfwdMIjdEcqPWUjdFtPNkJ3EBbPRui2hmyE7n86QneAreG4RegONp0SSYTuSrZaG6G7ArIRum2EbvNkI3T7KJ2N0O1Dbhe5Nq4l17LfyLVlPbm2byJ31kGiPO1TFzVqkiOhHjlbtCVn6w7k7HU6Odt1Pi4RusGX8Ac+mV/wDf6FWB7IBflETsjLctsI3aYpNIRu9749VPzFe1Ty01fkPqx9MzkmlpwpLcjRKJkoXrtguXzB9qaTa/d2djnVS/uOuokUddYQir7kenI0rNiymkHoLuOTGEboxvnBB/gBX0LMJ/gF3+BfiOWBXJAPcsocsNyQH/OA+TBAXoRuoz5eVSJ0+/l4xwdCd/5N5+Lzk+Ro0oxihlxLztS+5GzfhS+5zpbvKiHXhjRyrVhMxT/yxfr0HSr+chZVn7u6wvOEG6G72tvfA1WO3Bk7qeirD4Q/8Al+A3srUSIn5I0+mxfP0Bsp+uLr6NgF3Qxli8hG6C677QaB0O1yU9RpZ1HsYy9jTzTgXvIF69hdSvS1I6nwyXuo5M9fDE9Y2BC6nQ4q+f0n4YeMvFeMBfT3KinFH7wu8kf16W9mwi1B6Hat/JNKli4UPtywzjnqo9yOmrXJwVYZ8xzV+0xy9ugTVoRujC/n4fPhvDi/sMj8gC/wJ3wyv5YgdDtq1cYzT8aUTqOSn74Wa+FIaSl9ZQwDFE6Ebnf2UeCSGlM6jaLOukisonv3NukrYxinkBG68286X+Yv6vRBFH3NcHI2b8OrU8OLyz5Mrh2bybX6v1Q47THhr9o73/sHHJYgdFd7+1sZv+S3+VQ8e6acF+dX1qKu8OXsdjLFjn5S+M2/8dxAAa1JhO7aCexsGwcYKZ47h0p++Jzi+iv4Celb2xg0fFgRuo9mcRBhPOMSfcGVFHXOpVTwy3VqAaLvUVPQ8CEjdGPuqr32GTmSmwfYwGpRVBL7om06Ma9XUf4dlwXcQaxA6IbsGN+dHsBw5mRTSSb79pvX8bX/SPjVG9sUQjecbAkYDER1JQu/peL/m0qxY57TrItL+oqjbiQcDCNCt5cPA1F21JnnU/Qt91Phsw9p1t5ZOg9h4I10ELodHGm7jxzSdQUKp44n9/490sZRo7xbZhVCt5sjfUedRF3XKvb+ieRo0FjauPN0P+hpDqHb0aKNSjFok+5as4y3gPOocPJDEnR4lW7ZIip8bgzFjHyYHI3V7TfpA6YxhpGtLYwI3e7tm1XKR1sEzq69eAv5jmLHPidBh5eHXv0o9qFnqej1Z8i9R32WV/pACTBGGHgjHYRuR/PWktaRneSr98n1l+Yy4s4FK52zZTv2uU6SNmhbzmpbhNDt3rFF0k4y5pBh5DzpFE8eTJTOtW0j+3h/SRu01SFzCN1RqQrbFY6jXDA4l4kNqGTBN1Q0U1lwnBROe1Tfc3h7uqRUGbU+njGqkkpWKKxdOMiKZ3bWD+2nqAEXUszwMZpsJ0kQUbL4B3YXviidA62PZ4xIUVT3PuTS5hA4OQWPjhC+i155UhZ09GX/UrJwG7QN29yt+pOc2hwgOxf31AzRg5i7H5MFWfzZf9T8cRu01d09yQRCt7NTqgxe8ov2PevoGIp99CXJi2EVFr3zEhWOG85mNoFi7nncl2H04b4yhhEBw4jQ7Vq3Qi5WVP/zNWe0iAqfGiV5OazimBtHUeykmbxtZVHRy75ySB/uK2OEgTfSQejGeUtW/ME8ZlD0xcPElyt44HrZXWLunyQWB8fQxitXWX/bIoRuXMeo1FP5mjeh4i/fF18ubsp7sjsUTR0nFhjH0MarJ+XJJEI3m+voAReQa2Maudau8CaGY594jVW/mkQ57rxc8escNUt3F7RFn+gBg322sooorAjdfBGKF8wlZ7su5Oyc6k0MF064g01JvkSNjhrx4te5c0p1Bm3Rp3jBPB/XwlLedBC64bJE9TuHit5QyNgxtz8ou0rs+GnedAaOoY3HvfFJDFuE0A2Xo2TRD3z+h7RzPi+7QuHE0d70Do6hjcc9CUDmEbqjL79JVlfRe6XYcM5W7dkXUsjQ0deOIGcX38xG0azXpE/0UOOAeuFG6C7+5G1ZnTHX31m6QLZuYN9UIUsXfzCDXGm+7xzHXHeH9Cn+1DSgniUI3TG3PiApk+J5c5Qj/8hUWQjCL9fhGNoENLkWInQXvTlFUibRg69Ugc3T94thkevPdTiGNhWQeYRu3LWIPm8ouVb+wb7d3NKtoN8gin14CsUMG+lrmrmNi/0h9AmYCtChcCN0465F8XefkrPHqezbXVDK76L5VPjMA1T0/uu+Wx23cbJ/ij4BUwkVkyUI3fCnY8e/KJatZP7npTzzb9ThGNoEIisRuuEPF068Vyxb1KBLS+eIf6MOx9BGz9PB2LhX2yc+Pv6PDh06GL9o7PsUjLhEtqW4lz/yRofl2nEkW3DPVbINx834Qnw/o7R+/XrcuejTs2fPCjP+Ze4twqP+w4w2gB/wBf7Ap1snRQL5ICfkhdyQ3ySBtyUm7tXOTk5OLn/3wnPlkCh+4m5y8rYq//O2FjvhFbE0OkqHOxcf8lxWesvM717tbAp098Kz0yFRzOfF+eV/5gd8gb8KCC9GXRMUQjcuGPw4d34eFYwfTu4De8srHdfJMW4jPp8JpYsUQjcUCH6co1oNips4kxz1G5WXlevkGLcRn8+80lmO0I0LHvf65/JAAwp+6yldOBG6oWAFIy+VBylQ8LsSpQsdoRv5m9hRT4gDWfDADT6OZNk6tPHmegxSJBG6kQ8rfGmCOORxU971cczL1qGNN3dmjsKC0I1MQtzkt6ToPe0TCYRuZAIKxt4spZKndaxD6I469zKKHf0UuTPTZasqWfqrFNm2uA7H0MaUFaoChO6S7z+jwmmPkiMpWbbUqN5nSBE3gutwDG2CIBuhu1TpfBC6y75zMR1v+ONla9NWY/liiWzKPi0hEVfPvqbHysjIANzUDJ6skUbaB3hHABf6jmBmB/yC77JPW0jExvIFSUD+8coRzDsX2qPvs9jnq6Xn8+n4dNjWhpvC/qUK37kYollvs89qCR/kh91rGUI3fLoi3o4k7OftNZC/ZGSVmkXo1nnZJ2iEbvAN/iVtwPIE8l8NUjmE7hBf9okIQreBl31shO4KJuq4ROgO9aM9kUDoNvhCt43QXcFEHXcI3SfC16Ii9SUBG6HbejqhEbojtThshG5ryUboDkHxQDZCt3myEbpD3Go9ZCN0GyMbodtCi1eWbIRu/a3cRugOkk54hO4go7AqQei2v4EcvOKVtZTHBUJ3iOF/RBG6bcUrpf8XYAB9oWv0xG9SfQAAAABJRU5ErkJggg==') no-repeat;
            padding: 0 !important;
            opacity: 0.5;
        }
        [class^=adgurd-alert-logo-big] {
            width: 40px !important;
            height: 45px !important;
            margin: 5px 5px 0px 5px !important;
        }
        .adgurd-alert-logo-big {
            background-position: 0px 0px;
        }
        [class^=adgurd-alert-logo-big]:hover {
            opacity: 1;
        }
        .adgurd-alert-logo-big:hover {
            background-position: -50px 0px;
        }
        [class^=adgurd-alert-logo-small] {
            width: 25px;
            height: 25px;
            margin: 5px 5px 5px 5px;
        }
        .adgurd-alert-logo-small {
            background-position: -99px -8px;
        }
        .adgurd-alert-logo-small:hover {
            background-position: -134px -8px;
            opacity: 1;
        }
    </style>


</head>
<body>


<iframe src="blocking.php" frameborder="0" width="668" height="213"></iframe>

<br>

<iframe src="blocking-rule.php" frameborder="0" width="668" height="503"></iframe>

<br>

<iframe src="blocking-preview.php" frameborder="0" width="668" height="213"></iframe>

<br>

<iframe src="settings.php" frameborder="0" width="458" height="414"></iframe>

<br>

<iframe src="menu.php" frameborder="0" width="418" height="436"></iframe>





<div class="adgurd-alert adguard-assistant-button-fixed adguard-assistant-button-bottom adguard-assistant-button-right">
    <div class="adgurd-alert-wrap">
        <div class="adgurd-alert-logo-big"></div>
        <div class="adgurd-alert-cont" style="opacity: 0; display: none;">
            <div class="adgurd-alert-tail"></div>
            <div class="adgurd-alert-head"></div>
            <div class="adgurd-alert-text"></div>
            <div class="adgurd-alert-more"></div>
        </div>
    </div>
</div>


</body>
</html>
